// src/App.js
import React from 'react';
import './App.css';          // puoi tenerlo o semplificarlo
import OrderForm from './OrderForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event-Driven Order Demo</h1>
      </header>
      <main style={{ padding: '1rem' }}>
        <OrderForm />
      </main>
    </div>
  );
}

export default App;
