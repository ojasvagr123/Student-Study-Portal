import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";

export default function CareerQuiz({ goal }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/api/quiz/${goal.toUpperCase()}`)
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to load quiz. Try again.");
        setLoading(false);
      });
  }, [goal]);

  const handleOptionChange = (questionId, selected) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selected }));
  };

  const handleSubmit = async () => {
    const submission = questions.map((q) => ({
      questionId: q.id,
      selectedAnswer: answers[q.id] || "",
    }));

    try {
      const res = await axios.post("/api/quiz/submit", submission);
      setScore(res.data);
      setSubmitted(true);
    } catch (e) {
      console.error("❌ Failed to submit quiz");
    }
  };

  if (loading) return <div className="text-center py-20 text-xl text-indigo-600 animate-pulse">Loading quiz...</div>;
  if (error) return <div className="text-center text-red-600 py-20 text-lg">{error}</div>;
  if (!questions.length) return <div className="text-center py-20 text-gray-600">No questions available.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">{goal} Quiz</h1>

        <ol className="space-y-8">
          {questions.map((q, index) => (
            <li key={q.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <p className="font-semibold text-lg mb-4">{index + 1}. {q.question}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, i) => {
                  const selected = answers[q.id];
                  const isCorrect = submitted && opt === q.correctAnswer;
                  const isWrong = submitted && selected === opt && selected !== q.correctAnswer;

                  return (
                    <li key={i}>
                      <label
                        className={`flex items-center p-2 rounded-lg border transition cursor-pointer
                          ${isCorrect ? 'bg-green-100 border-green-400' : ''}
                          ${isWrong ? 'bg-red-100 border-red-400' : ''}
                          ${!isCorrect && !isWrong ? 'hover:bg-indigo-50' : ''}
                        `}
                      >
                        <input
                          type="radio"
                          name={`q${q.id}`}
                          value={opt}
                          checked={selected === opt}
                          disabled={submitted}
                          onChange={() => handleOptionChange(q.id, opt)}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{opt}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>

        {!submitted ? (
          <div className="text-center mt-10">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              ✅ Submit Quiz
            </button>
          </div>
        ) : (
          <div className="text-center mt-10 text-xl font-semibold text-indigo-700">
            🎉 You got {score.correct} correct and {score.wrong} wrong!
          </div>
        )}
      </div>
    </div>
  );
}
