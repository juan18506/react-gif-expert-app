import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Tests in <GifItem />', () => {
  const title = 'A test title';
  const url   = 'https://test-url.com/testing';

  it('should match with snapshot', () => {
    const { container } = render( 
      <GifItem title={ title } url={ url } /> 
    );
    expect( container ).toMatchSnapshot();
  });

  it('should show img with correct URL and ALT', () => {
    render( <GifItem title={ title } url={ url } /> );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  it('should show title', () => {
    render( <GifItem title={ title } url={ url } /> );
    expect( screen.getByText(title) ).toBeTruthy();
  });
});
