// src/components/base/EventDisplay.jsx
import React from 'react';

export default function EventDisplay({
  events = [],
  containerClass = '',
  emptyMessage = 'Nessun evento ricevuto.',
  renderItem,               // funzione: (evt, idx) => ReactNode
}) {
  return (
    <div className={`bg-gray-100 rounded-md p-4 h-60 overflow-auto shadow-inner ${containerClass}`}>
      {events.length === 0
        ? <p className="text-gray-500">{emptyMessage}</p>
        : events.map((evt, idx) =>
            <div key={idx} className="mb-2">
              { renderItem
                  ? renderItem(evt, idx)
                  : <span className="text-sm">{JSON.stringify(evt)}</span>
              }
            </div>
          )
      }
    </div>
  );
}
