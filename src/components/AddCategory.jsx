import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={ onSubmit } aria-label="form">
      <input
        type="text"
        placeholder="Search gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
}

AddCategory.propTypes = {
  updateCategories: PropTypes.func.isRequired,
}