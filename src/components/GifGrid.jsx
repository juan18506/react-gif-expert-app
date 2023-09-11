import PropTypes from 'prop-types';
import { GifItem } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <section>
      <h3>{ category }</h3>

      {
        isLoading && ( <h2>Loading...</h2> )
      }
      
      <ul className="card-grid">
        {
          images.map(( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </ul>
    </section>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}