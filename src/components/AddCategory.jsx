import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      type="text"
      placeholder="Search gifs"
      value={ inputValue }
    />
  );
}
