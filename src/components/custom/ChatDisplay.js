import React from 'react';

function ChatDisplay({ events }) {
  // Filtra solo gli eventi di chat
  const chatEvents = events.filter(evt => evt.sender && evt.text);
  
  return (
    <div className="h-64 overflow-y-auto p-2">
      {chatEvents.map((evt, idx) => {
        const isUser = evt.sender === 'user';
        return (
          <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-1`}>
            <div className={`${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded px-3 py-2 max-w-xs`}>
              {evt.text}
            </div>
          </div>
        );
      })}
      {chatEvents.length === 0 && (
        <p className="text-gray-500 text-sm">Nessun messaggio ancora. Inizia a scrivere!</p>
      )}
    </div>
  );
}

export default ChatDisplay;
