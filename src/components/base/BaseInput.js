import React from 'react';

export default function BaseInput(props) {
  return (
    <input
      className="border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition w-full"
      {...props}
    />
  );
}
