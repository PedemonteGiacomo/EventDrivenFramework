// src/components/base/BaseButton.js
import React from 'react';

export default function BaseButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseStyles = 'px-4 py-2 font-medium rounded transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
