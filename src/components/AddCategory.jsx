import { useState } from 'react';

export const AddCategory = ({ updateCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if ( newInputValue.length <= 1 ) return;

    updateCategories( newInputValue );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
}
