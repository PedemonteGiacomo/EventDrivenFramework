import React from 'react';

export default function BaseButton({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-400 hover:bg-gray-500 text-black',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };
  return (
    <button
      className={`px-4 py-2 rounded-md shadow ${variants[variant]} ${className} transition`}
      {...props}
    >
      {children}
    </button>
  );
}
