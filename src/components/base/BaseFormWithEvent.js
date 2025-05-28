// src/components/base/BaseFormWithEvent.jsx
import React, { useState } from 'react';
import { useEventBus } from '../../hooks/useEventBus';

export default function BaseFormWithEvent({
  eventType,
  buildPayload,
  placeholder = 'Scrivi...',
  buttonText = 'Invia',
  className = ''
}) {
  const { sendEvent } = useEventBus();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = buildPayload ? buildPayload(text) : { text };
    sendEvent(eventType, payload);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={`flex space-x-2 ${className}`}>
      <input
        type="text"
        className="flex-1 border rounded px-3 py-2"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {buttonText}
      </button>
    </form>
  );
}
