import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <li className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </li>
  );
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}