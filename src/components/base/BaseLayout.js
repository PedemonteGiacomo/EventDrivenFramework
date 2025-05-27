// src/components/base/BaseLayout.jsx
import React from 'react';

/**
 * BaseLayout - Componente layout di base per l'applicazione.
 * Fornisce una struttura con intestazione fissa (header) e contenuto principale.
 * Utilizza classi di stile (es. TailwindCSS) per un design moderno e responsivo.
 */
function BaseLayout({ header, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Intestazione */} 
      <header className="bg-blue-600 text-white p-4 text-xl font-semibold">
        {header}
      </header>
      {/* Contenuto principale */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}

export default BaseLayout;
