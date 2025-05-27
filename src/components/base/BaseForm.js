// src/components/base/BaseForm.jsx
import React, { useState } from 'react';

/**
 * BaseForm - Componente form di base con input di testo e pulsante di invio.
 * Comportamento: gestisce internamente lo stato dell'input e chiama onSubmit(valore)
 * quando il form viene inviato. Dopo l'invio, il campo di input viene resettato.
 */
function BaseForm({ onSubmit, placeholder = "Scrivi qualcosa..." }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && value.trim() !== "") {
      onSubmit(value);  // Invoca la callback passando il testo inserito
    }
    setValue(""); // Reset del campo di input dopo l'invio
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
        Invia
      </button>
    </form>
  );
}

export default BaseForm;
