import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseCard from '../base/BaseCard';
import BaseForm from '../base/BaseForm';
import EventDisplay from '../base/EventDisplay';
import { sendEvent } from '../../state/eventsSlice';
import { EVENT_TYPES } from '../../state/eventTypes';


export default function CustomExampleComponent() {
  const dispatch = useDispatch();
  const events = useSelector(s => s.events.list);

  const handleSend = message => {
    dispatch(sendEvent(EVENT_TYPES.ORDER_SUBMITTED, { details: message }));
  };

  return (
    <BaseCard title={`Messaggi (${events.length})`}>
      <EventDisplay events={events} />
      <BaseForm onSubmit={handleSend} placeholder="Invia ordine..." />
    </BaseCard>
  );
}
