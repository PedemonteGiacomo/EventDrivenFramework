import React from 'react';

export default function BaseLayout({ header, children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-semibold">{header}</h1>
      </header>
      <main className="container mx-auto py-8">{children}</main>
    </div>
  );
}
