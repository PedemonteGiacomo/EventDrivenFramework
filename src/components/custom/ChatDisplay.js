// src/components/custom/ChatDisplay.jsx
import React, { useEffect, useRef } from 'react'
import EventDisplay from '../base/EventDisplay'

export default function ChatDisplay({ events }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [events.length])

  return (
    <EventDisplay
      events={events}
      emptyMessage="Nessun messaggio ancora."
      containerClass="
        p-4 h-full overflow-y-auto flex flex-col space-y-4
        bg-green-50
      "
      renderItem={(evt, idx) => {
        const isUser = evt.payload.sender === 'user'
        return (
          <div
            key={idx}
            className={`flex items-end ${
              isUser ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`
                relative max-w-[75%] px-4 py-2 text-sm leading-snug
                ${isUser ? 'bg-green-500 text-white' : 'bg-white text-gray-800'}
                rounded-lg shadow
                ${
                  isUser
                    ? 'rounded-br-none'
                    : 'rounded-bl-none'
                }
              `}
            >
              {evt.payload.text}
              {/* la “pinna” */}
              <span
                className={`
                  absolute bottom-0
                  ${isUser ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}
                  w-3 h-3 bg-inherit
                  ${isUser ? 'bg-green-500' : 'bg-white'}
                  transform rotate-45
                `}
              />
            </div>
          </div>
        )
      }}
    >
      {/* ref per scroll */}
      <div ref={bottomRef} />
    </EventDisplay>
  )
}
