// src/components/base/EventDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * EventDisplay - Componente per visualizzare la lista degli eventi ricevuti dal backend.
 * Si sottoscrive allo store Redux (slice "events") e mostra gli eventi in ordine di arrivo.
 */
function EventDisplay() {
  // Recupera la lista degli eventi dallo store Redux
  const events = useSelector(state => state.events.list);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-2 h-64 overflow-y-auto">
      {events.map((evt, index) => (
        <div key={index} className="text-sm text-gray-800 mb-1">
          {/* Visualizza ogni evento (se è un oggetto, lo converte in stringa JSON) */}
          {typeof evt === 'string' ? evt : JSON.stringify(evt)}
        </div>
      ))}
      {events.length === 0 && (
        <p className="text-gray-500 text-sm">Nessun evento ricevuto.</p>
      )}
    </div>
  );
}

export default EventDisplay;
