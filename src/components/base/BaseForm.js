// src/components/base/BaseForm.js
import React, { useState } from 'react';
import BaseInput from './BaseInput';
import BaseButton from './BaseButton';

export default function BaseForm({ onSubmit, placeholder, buttonText = 'Invia' }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') return;
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <BaseInput
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1"
      />
      <BaseButton type="submit" variant="primary">
        {buttonText}
      </BaseButton>
    </form>
  );
}
