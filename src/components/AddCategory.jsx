import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => setInputValue( target.value );

  return (
    <input
      type="text"
      placeholder="Search gifs"
      value={ inputValue }
      onChange={ onInputChange }
    />
  );
}
