import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';

function UserContributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get('/api/contributions/my')
      .then((res) => setContributions(res.data))
      .catch((err) => console.error('❌ Error fetching contributions:', err));
  }, []);

  if (!contributions.length) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-center text-gray-500 dark:text-gray-300">
        📭 No contributions yet.
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center text-lg font-bold">
          🧩
        </div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Your Contributions</h2>
      </div>

      {/* List */}
      <div className="space-y-4">
        {contributions.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-all hover:shadow-md"
          >
            <h3 className="text-md font-semibold text-indigo-700 dark:text-indigo-300">{c.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{c.description}</p>
            <p className="text-xs text-indigo-500 dark:text-indigo-400 mt-2">
              {c.type} •{' '}
              <a href={c.url} target="_blank" rel="noreferrer" className="underline hover:text-indigo-600">
                View
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserContributions;
