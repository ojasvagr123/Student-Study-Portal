// src/components/StriverProgressSection.jsx
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";

export default function StriverProgressSection() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("/api/career/placement/progress")
      .then(res => setTopics(res.data))
      .catch(() => console.error("Failed to load Striver topics"));
  }, []);

  const toggleAttempt = (topic) => {
    axios.post("/api/career/placement/attempt", {
      topic: topic.topic,
      link: topic.link
    }).then(() => {
      setTopics(prev => prev.map(t => t.topic === topic.topic ? { ...t, attempted: true } : t));
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">💻 Striver Sheet</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((t) => (
          <li
            key={t.topic}
            className={`p-4 rounded-xl shadow border-l-4 ${t.attempted ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-white'}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-md font-semibold text-gray-800">{t.topic}</h4>
                <a
                  href={t.link}
                  className="text-sm text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Practice Link
                </a>
              </div>
              {!t.attempted && (
                <button
                  onClick={() => toggleAttempt(t)}
                  className="text-sm bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                >
                  Mark Done
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
