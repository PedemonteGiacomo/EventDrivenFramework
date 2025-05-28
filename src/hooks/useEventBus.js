// src/hooks/useEventBus.js
import { useDispatch } from 'react-redux';
import { sendEvent } from '../state/eventsSlice';

export function useEventBus() {
  const dispatch = useDispatch();

  const emit = (eventType, payload = {}) => {
    if (!eventType) return;
    dispatch(sendEvent(eventType, payload));
  };

  return { sendEvent: emit };
}
