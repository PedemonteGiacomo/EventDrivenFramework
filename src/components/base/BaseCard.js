// src/components/base/BaseCard.jsx
import React from 'react';

/**
 * BaseCard - Componente card di base.
 * Contenitore con bordi arrotondati, ombra e padding standard per un aspetto consistente.
 * Può includere un titolo opzionale e qualsiasi contenuto figlio.
 */
function BaseCard({ title, children }) {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

export default BaseCard;
