// // src/components/custom/CustomExampleComponent.jsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import BaseCard from '../base/BaseCard';
// import BaseForm from '../base/BaseForm';
// import EventDisplay from '../base/EventDisplay';
// import { sendEvent } from '../../state/eventsSlice';

// /** 
//  * CONTRATTO DEL FRAMEWORK:
//  * 1. I componenti custom usano i componenti base forniti (layout, card, form, display eventi) per coerenza di comportamento e stile.
//  * 2. I componenti custom ricevono dati/eventi globali tramite lo store Redux (useSelector) invece di gestire direttamente la comunicazione WebSocket.
//  * 3. I componenti custom emettono eventi/azioni globali tramite lo store Redux (useDispatch), ad esempio inviando azioni predefinite (es. sendEvent) al gateway WebSocket.
//  * 4. Ogni componente custom dovrebbe essere ben documentato e seguire convenzioni chiare, facilitando l'estensione da parte di altri team.
//  */

// /**
//  * CustomExampleComponent - Esempio di componente personalizzato (es. una semplice chat) che rispetta il contratto del framework.
//  * Utilizza i componenti base per la UI e interagisce con lo stato/eventi globali tramite Redux.
//  */
// function CustomExampleComponent() {
//   const dispatch = useDispatch();
//   const eventCount = useSelector(state => state.events.list.length);

//   // Gestore per l'invio di un nuovo messaggio/evento
//   const handleSend = (message) => {
//     // Invia un evento di tipo "chat_message" verso il backend tramite WebSocket (via Redux)
//     dispatch(sendEvent({ type: 'chat_message', content: message }));
//   };

//   return (
//     <BaseCard title={`Chat - ${eventCount} messaggi`}>
//       {/* Visualizza gli eventi ricevuti (es. messaggi chat) */}
//       <EventDisplay />
//       {/* Form per inviare un nuovo messaggio */}
//       <BaseForm onSubmit={handleSend} placeholder="Digita un messaggio..." />
//     </BaseCard>
//   );
// }

// export default CustomExampleComponent;

// src/components/custom/CustomExampleComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseCard from '../base/BaseCard';
import BaseForm from '../base/BaseForm';
import EventDisplay from '../base/EventDisplay';
import { sendEvent } from '../../state/eventsSlice';

export default function CustomExampleComponent() {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.list);

  const handleSend = message => {
    dispatch(sendEvent('OrderSubmitted', { details: message, payload: { text: message } }));
  };

  return (
    <BaseCard title={`Messaggi (${events.length})`}>
      <EventDisplay events={events}/>
      <BaseForm onSubmit={handleSend} placeholder="Invia un ordine…" />
    </BaseCard>
  );
}
