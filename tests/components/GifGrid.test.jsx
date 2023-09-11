import { describe, it, expect, vitest } from 'vitest';
import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

vitest.mock('../../src/hooks/useFetchGifs')

describe('Tests in <GifGrid />', () => {
  const category = 'random category';

  it('should show category and loading at start', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render( <GifGrid category={ category } /> );
    expect( screen.getByText('Loading...') ).toBeTruthy();
    expect( screen.getByText(category) ).toBeTruthy();
  });

  it('should show items when useFetchGifs load images', () => {
    const gifs = [
      {
        id: '45',
        title: 'science',
        url: 'https://localhost/science.jpg'
      },
      {
        id: '123',
        title: 'adventure',
        url: 'https://localhost/adventure.jpg'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render( <GifGrid category={ category } /> );
    expect( screen.getAllByRole('img').length ).toBe( 2 );
  });
});
