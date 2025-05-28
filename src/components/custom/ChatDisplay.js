import React, { useEffect, useRef } from 'react';

export default function ChatDisplay({ events }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [events]);

  return (
    <div className="bg-gray-50 h-64 p-4 overflow-auto rounded-md shadow-inner">
      {events.map((evt, idx) => {
        const isUser = evt.payload.sender === 'user';
        return (
          <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
            <div className={`rounded-md px-3 py-2 shadow ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {evt.payload.text}
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
