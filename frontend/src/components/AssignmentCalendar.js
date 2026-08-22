import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function AssignmentCalendar() {
  const events = [];

  return (
    <section className="w-full">
      <div className="rounded-t-2xl px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h3 className="text-2xl font-bold">📅 Assignment & Exam Timetable</h3>
        <p className="text-sm text-indigo-100">Deadlines and important dates</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-b-2xl shadow-xl">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height={500}
        />
      </div>
    </section>
  );
}
