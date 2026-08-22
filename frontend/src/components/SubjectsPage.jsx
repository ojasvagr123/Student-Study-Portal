import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";
import Header from "../components/Header"; 

import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export default function SubjectPage() {
  const { semesterId } = useParams();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const branch = searchParams.get("branch");

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(
          `/api/semesters/${semesterId}/subjects?branch=${encodeURIComponent(branch)}`
        );
        setSubjects(res.data);
      } catch (err) {
        console.error("Error fetching subjects:", err);
        setError("Failed to load subjects.");
      } finally {
        setLoading(false);
      }
    };

    if (branch && semesterId) fetchSubjects();
  }, [semesterId, branch]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-blue-100">
      {/* ✅ Shared Header */}
      <Header />

      {/* Page-specific Info Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-8 px-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-1">📘 Subjects</h2>
        <p className="text-sm">Explore your subjects with notes, videos, PDFs and more!</p>
        <div className="mt-2 text-sm">
          Semester <span className="font-semibold">{semesterId}</span> — <span className="uppercase font-semibold">{branch}</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        {loading ? (
          <div className="text-center text-indigo-700 text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : subjects.length === 0 ? (
          <div className="text-center text-gray-600">No subjects found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="cursor-pointer bg-white p-6 rounded-xl shadow border-l-4 border-indigo-500 hover:border-indigo-700 transition transform hover:scale-105"
                onClick={() =>
                  navigate(`/subjects/${subject.id}/units?name=${subject.name}`)
                }
              >
                <h3 className="text-xl font-semibold text-indigo-700">{subject.name}</h3>
                <p className="text-gray-600 text-sm mb-2">Code: {subject.code}</p>
                <p className="text-gray-500 text-sm">
                  Click to view curated notes, PDFs, and lecture videos for {subject.name}.
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
