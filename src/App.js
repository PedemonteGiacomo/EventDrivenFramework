// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BaseLayout from './components/base/BaseLayout';
import CustomExampleComponent from './components/custom/CustomExampleComponent';
import ChatComponent from './components/custom/ChatComponent';
import { connect } from './state/eventsSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connect({ url: 'http://localhost:4000' }));
  }, [dispatch]);

  return (
    <BaseLayout header="Applicazione Event-Driven">
      <div className="space-y-6">
        <CustomExampleComponent />
        <ChatComponent />
      </div>
    </BaseLayout>
  );
}
