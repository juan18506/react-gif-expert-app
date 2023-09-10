import { GifItem, Loading } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <section>
      <h3>{ category }</h3>

      {
        isLoading && ( <Loading /> )
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
