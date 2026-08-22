// src/pages/UnitPage.jsx
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";
import { useParams, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import CommentSection from "../components/CommentSection";

export default function UnitPage() {
  const { subjectId } = useParams();
  const [searchParams] = useSearchParams();
  const subjectName = searchParams.get("name");

  const [units, setUnits] = useState([]);
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("VIDEO");

  const [resources, setResources] = useState([]);
  const [pyqs, setPyqs] = useState([]);

  

  useEffect(() => {
    axios
      .get(`/api/subjects/${subjectId}/units`)
      .then((res) => setUnits(res.data));
  }, [subjectId]);

  useEffect(() => {
    const unitId = units[activeUnitIndex]?.id;
    if (!unitId) return;

    axios
      .get(`/api/units/${unitId}/resources`)
      .then((res) => setResources(res.data));

    axios
      .get(`/api/units/${unitId}/pyqs`)
      .then((res) => setPyqs(res.data));
  }, [units, activeUnitIndex]);

  const filteredResources = resources.filter((r) => r.type === activeTab);

  const getEmbedUrl = (url) => {
    const videoMatch = url.match(/watch\?v=([a-zA-Z0-9_-]+)/);
    const playlistMatch = url.match(/playlist\?list=([a-zA-Z0-9_-]+)/);

    if (videoMatch) {
      return `https://www.youtube.com/embed/${videoMatch[1]}`;
    } else if (playlistMatch) {
      return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
    } else if (url.includes("youtube.com/embed/")) {
      return url;
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="px-6 py-4 bg-white shadow sticky top-0 z-10">
        <h1 className="text-xl font-bold text-indigo-700">
          {subjectName} — Units
        </h1>
        <p className="text-sm text-gray-500">Select a unit to explore</p>
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 py-4">
        {units.map((unit, idx) => (
          <button
            key={unit.id}
            onClick={() => setActiveUnitIndex(idx)}
            className={`px-4 py-2 rounded-full ${
              idx === activeUnitIndex
                ? "bg-indigo-600 text-white"
                : "bg-white border text-indigo-600"
            }`}
          >
            {unit.title || `Unit ${idx + 1}`}
          </button>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        {["VIDEO", "NOTE", "BOOK", "PYQ"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              tab === activeTab
                ? "bg-indigo-500 text-white"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-6">
        {activeTab !== "PYQ" ? (
          filteredResources.length === 0 ? (
            <p className="text-gray-500">No {activeTab.toLowerCase()}s found.</p>
          ) : (
            filteredResources.map((r) => (
              <div key={r.id} className="bg-white p-4 rounded-xl shadow-md border mb-4">
                <h2 className="font-semibold text-indigo-700 mb-2">{r.title}</h2>
                {r.type === "VIDEO" ? (
                  getEmbedUrl(r.url) ? (
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                      <iframe
                        src={getEmbedUrl(r.url)}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        title={r.title}
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <p className="text-red-500 text-sm">Invalid video URL</p>
                  )
                ) : (
                  <a
                    href={r.url}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View {r.type.toLowerCase()}
                  </a>
                )}
              </div>
            ))
          )
        ) : pyqs.length === 0 ? (
          <p className="text-gray-500">No previous year questions found.</p>
        ) : (
          pyqs.map((pyq) => (
            <div key={pyq.id} className="bg-white p-4 rounded shadow mb-4">
              <h3 className="font-bold text-indigo-700 mb-2">{pyq.questionText}</h3>
              <a href={pyq.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View PYQ PDF
              </a>
              <CommentSection contextType="PYQ" contextId={pyq.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
