import React from 'react';

export default function EventDisplay({ events }) {
  return (
    <div className="bg-gray-100 rounded-md p-4 h-60 overflow-auto shadow-inner">
      {events.length === 0 ? (
        <p className="text-gray-500">Nessun evento ricevuto.</p>
      ) : (
        events.map((evt, idx) => (
          <div key={idx} className="mb-2 text-sm">
            {JSON.stringify(evt)}
          </div>
        ))
      )}
    </div>
  );
}
