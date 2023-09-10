import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'Action', 'Drama' ]);

  const onAddCategory = () => setCategories([ ...categories, 'Fantasy' ]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={ onAddCategory }>Add Category</button>

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
