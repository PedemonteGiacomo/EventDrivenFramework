import React from 'react';

export default function BaseCard({ title, children, className = '', noPadding = false }) {
  return (
    <div
      className={
        `bg-white rounded-lg shadow ${noPadding ? '' : 'p-4'} mb-4 ${className}`
      }
    >
      {title && <h3 className="text-xl font-semibold mb-2 px-4 pt-4">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}