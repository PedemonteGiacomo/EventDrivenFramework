// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BaseLayout from './components/base/BaseLayout';
import CustomExampleComponent from './components/custom/CustomExampleComponent';
import { connect } from './state/eventsSlice';

function App() {
  const dispatch = useDispatch();

  // All'avvio dell'app, effettua la connessione al gateway WebSocket
  useEffect(() => {
    // URL del gateway WebSocket (esempio per RabbitMQ WebSocket)
    dispatch(connect({ url: 'http://localhost:4000' }));
  }, [dispatch]);

  return (
    <BaseLayout header="Applicazione Event-Driven">
      {/* Componente custom principale */}
      <CustomExampleComponent />
    </BaseLayout>
  );
}

export default App;
