// useEventBus.js
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

export function useEventBus() {
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  useEffect(() => {
    // Connessione al gateway WebSocket (assume gateway in ascolto su localhost:4000)
    socketRef.current = io('http://localhost:4000');

    // All’apertura della connessione
    socketRef.current.on('connect', () => {
      console.log('Connesso al event bus WebSocket');
    });

    // Ricezione di un evento di ordine creato dal server
    socketRef.current.on('OrderCreated', (data) => {
      console.log('Evento OrderCreated ricevuto dal server:', data);
      // Dispatch di un'azione Redux per aggiornare lo stato globale
      dispatch({ type: 'ORDER_CREATED', payload: data });
    });

    // Cleanup: disconnetti socket alla dismissione del componente
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [dispatch]);

  // Funzione per inviare un evento al gateway
  const sendEvent = (eventType, payload) => {
    if (socketRef.current) {
      socketRef.current.emit(eventType, payload);
    }
  };

  return { sendEvent };
}
