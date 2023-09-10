import { GifItem, Loading } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading && ( <Loading /> )
      }
      
      <ol className="card-grid">
        {
          images.map(( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </ol>
    </>
  );
}
