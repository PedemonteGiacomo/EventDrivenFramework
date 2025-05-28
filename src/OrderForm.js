// OrderForm.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEventBus } from './hooks/useEventBus';

export default function OrderForm() {
  const [orderDetails, setOrderDetails] = useState('');
  const { sendEvent } = useEventBus();        // Hook per interagire con il bus eventi
  const lastOrder = useSelector(state => state.lastOrder);  // Ultimo ordine elaborato dallo store

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderDetails.trim() === '') return;
    // Invia evento OrderSubmitted al backend con i dettagli inseriti
    sendEvent('OrderSubmitted', { details: orderDetails });
    console.log('Inviato evento OrderSubmitted con payload:', orderDetails);
    setOrderDetails('');  // reset del campo input
  };

  return (
    <div>
      <h2>Crea un nuovo ordine</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={orderDetails} 
          onChange={e => setOrderDetails(e.target.value)} 
          placeholder="Dettagli ordine" 
        />
        <button type="submit">Invia Ordine</button>
      </form>

      {lastOrder && (
        <div className="order-result">
          <h3>Ordine creato!</h3>
          <p>ID Ordine: <b>{lastOrder.orderId}</b></p>
          <p>Stato: {lastOrder.status}</p>
        </div>
      )}
    </div>
  );
}
