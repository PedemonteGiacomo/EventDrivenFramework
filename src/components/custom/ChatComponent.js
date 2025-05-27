// src/components/custom/ChatComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendEvent } from '../../state/eventsSlice';
import BaseCard from '../base/BaseCard';
import BaseForm from '../base/BaseForm';
import ChatDisplay from './ChatDisplay';

export default function ChatComponent() {
  const dispatch = useDispatch();
  const allEvents = useSelector(s => s.events.list);
  // Prendo solo i messaggi di chat (inviati o ricevuti)
  const chatEvents = allEvents.filter(e => e.type === 'ChatMessage');

  const handleSendMessage = (text) => {
    dispatch(sendEvent('ChatMessage', { type: 'ChatMessage', payload: { text } }));
  };

  return (
    <BaseCard title="Chatbot">
      <ChatDisplay events={chatEvents} />
      <BaseForm
        onSubmit={handleSendMessage}
        placeholder="Scrivi un messaggio..."
        buttonText="Invia"
      />
    </BaseCard>
  );
}
