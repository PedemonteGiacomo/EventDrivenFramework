// src/components/base/BaseButtonWithEvent.jsx
import React from 'react';
import { useEventBus } from '../../hooks/useEventBus';

export default function BaseButtonWithEvent({
  eventType,
  eventPayload,
  label,
  onClick,
  className = '',
  ...props
}) {
  const { sendEvent } = useEventBus();

  const handleClick = (e) => {
    if (eventType) sendEvent(eventType, eventPayload);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
