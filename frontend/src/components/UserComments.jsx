// src/components/UserComments.jsx
import React, { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";
import { useAuthStore } from "../stores/authStore";

export default function UserComments() {
  const { user, token } = useAuthStore();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`/api/comments/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.error("Error fetching user comments:", err);
      });
  }, [user]);

  if (!user) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
        💬 Your Comments
      </h2>
      {comments.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="border-b pb-2">
              <p className="text-sm">{c.commentText}</p>
              {c.driveLink && (
                <a
                  href={c.driveLink}
                  className="text-blue-500 text-xs underline block"
                  target="_blank"
                  rel="noreferrer"
                >
                  📎 Drive Link
                </a>
              )}
              <div className="text-xs text-gray-400 mt-1">
                {c.contextType} #{c.contextId} • {new Date(c.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
