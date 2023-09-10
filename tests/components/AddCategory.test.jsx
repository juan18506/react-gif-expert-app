import { describe, it, expect, vitest } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests in <AddCategory />', () => {
  const inputValue = 'random value';
  const updateCategories = vitest.fn();

  it('should change input value', () => {
    render( <AddCategory updateCategories={ updateCategories } /> );
    const input = screen.getByRole('textbox');
    
    fireEvent.input( input, { target: { value: inputValue } } );

    expect( input.value ).toBe( inputValue );
  });

  it('should call updateCategories if input have a new value', () => {
    render( <AddCategory updateCategories={ updateCategories } /> );
    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');
    
    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );
    
    expect( input.value ).toBe( '' );
    expect( updateCategories ).toHaveBeenCalledOnce();
    expect( updateCategories ).toHaveBeenCalledWith( inputValue );
  });

  it('should not call updateCategories if input is empty', () => {
    render( <AddCategory updateCategories={ updateCategories } /> );

    const form  = screen.getByRole('form');
    fireEvent.submit( form );
    
    expect( updateCategories ).not.toHaveBeenCalled();
  });
});