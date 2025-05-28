// src/components/custom/ChatComponent.jsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendEvent } from '../../state/eventsSlice'
import BaseCard from '../base/BaseCard'
import BaseForm from '../base/BaseForm'
import ChatDisplay from './ChatDisplay'
import { selectUniqueChatEvents } from '../../state/selectors'

export default function ChatComponent() {
  const dispatch = useDispatch()
  const events = useSelector(selectUniqueChatEvents)

  const handleSendMessage = text => {
    dispatch(sendEvent('ChatMessageSent', { sender: 'user', text }))
  }

  return (
    <BaseCard noPadding className="max-w-md mx-auto overflow-hidden shadow-xl">
      {/* Header chat */}
      <div className="bg-blue-600 text-white py-3 px-4 font-semibold text-lg">
        Chat in Tempo Reale
      </div>
      {/* Corpo chat */}
      <div className="flex flex-col h-[500px] bg-gray-100">
        <div className="flex-1 overflow-hidden">
          <ChatDisplay events={events} />
        </div>
        {/* Input */}
        <div className="bg-white px-4 py-3 border-t border-gray-200">
          <BaseForm
            onSubmit={handleSendMessage}
            placeholder="Scrivi un messaggio..."
            buttonText="Invia"
            className="space-x-3"
          />
        </div>
      </div>
    </BaseCard>
  )
}
