// src/components/custom/ChatDisplay.js
import React, { useEffect, useRef } from 'react';

export default function ChatDisplay({ events = [] }) { // <-- valore predefinito
  const bottomRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [events.length]);

  return (
    <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto flex flex-col space-y-2">
      {events.length === 0 ? (
        <p className="text-gray-500 text-sm">Nessun messaggio ancora.</p>
      ) : (
        events.map((evt, idx) => {
          const isUser = evt.direction === 'sent';
          return (
            <div
              key={idx}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-xs px-3 py-2 rounded-lg 
                  ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}
                `}
              >
                {evt.payload.text || JSON.stringify(evt.payload)}
              </div>
            </div>
          );
        })
      )}
      <div ref={bottomRef} />
    </div>
  );
}
