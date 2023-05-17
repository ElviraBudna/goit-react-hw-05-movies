import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, GalleryImg, LinkStyled } from './HomeList.styled';
// import defaultImage from 'img/photo.jpg';

export default function HomeList({ movies }) {
  const location = useLocation();
  // const handleImageError = event => {
  //   event.target.src = defaultImage;
  // };

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkStyled to={`movies/${movie.id}`} state={{ from: location }}>
            <GalleryImg
              src={movie.posterUrl}
              // onError={handleImageError}
              alt={movie.title}
            />
            {movie.title}
          </LinkStyled>
        </li>
      ))}
    </List>
  );
}

HomeList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      posterUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
