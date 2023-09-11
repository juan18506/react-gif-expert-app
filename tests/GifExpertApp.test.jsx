import { describe, test, it, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests in <GifExpertApp />', () => {
  const category = 'drama';

  it('should match with snapshot', () => {
    const { container } = render( <GifExpertApp /> );
    expect( container ).toMatchSnapshot();
  });

  it('should show title and should not show category at start', () => {
    render( <GifExpertApp /> );
    expect( screen.getByText('GifExpertApp') ).toBeTruthy();
    expect( screen.queryByText(category) ).toBeFalsy();
  });

  test('updateCategories should change categories', () => {
    render( <GifExpertApp /> );
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: category } } );
    fireEvent.submit( form );

    expect( screen.getByText(category) ).toBeTruthy();
  });

  test('updateCategories should not change categories if category is repeated', () => {
    render( <GifExpertApp /> );
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: category } } );
    fireEvent.submit( form );

    fireEvent.input( input, { target: { value: category } } );
    fireEvent.submit( form );

    expect( screen.getAllByText(category).length ).toBe( 1 );
  });
});
