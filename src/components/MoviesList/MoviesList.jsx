import PropTypes from 'prop-types';
import {
  LinkStyled,
  TitleMovie,
  ListOfMovies,
} from 'components/MoviesList/MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListOfMovies>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
            <img src={movie.poster} alt={movie.title} />
            <TitleMovie>{movie.title}</TitleMovie>
          </LinkStyled>
        </li>
      ))}
    </ListOfMovies>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default MoviesList;
