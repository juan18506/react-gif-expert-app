import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'Action', 'Drama' ]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <ol>
        { 
          categories.map( category => (
            <li key={ category }>{ category }</li>
          ))
        }
      </ol>
    </>
  );
}

