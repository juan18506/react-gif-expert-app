export const GifItem = ({ title, url }) => {
  return (
    <li className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </li>
  );
}
