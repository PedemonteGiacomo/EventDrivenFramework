import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendEvent } from '../../state/eventsSlice';
import BaseCard from '../base/BaseCard';
import BaseForm from '../base/BaseForm';
import ChatDisplay from './ChatDisplay';

export default function ChatComponent() {
  const dispatch = useDispatch();
  const events = useSelector(s => s.events.list.filter(e => e.type === 'ChatMessageSent'));

  const handleSendMessage = text => {
    dispatch(sendEvent('ChatMessageSent', { sender: 'user', text }));
  };

  return (
    <BaseCard title="Chat in Tempo Reale">
      <ChatDisplay events={events} />
      <BaseForm onSubmit={handleSendMessage} placeholder="Scrivi un messaggio..." />
    </BaseCard>
  );
}
