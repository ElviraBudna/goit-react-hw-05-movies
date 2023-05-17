import PropTypes from 'prop-types';
import {
  LinkStyled,
  TitleMovie,
  ListOfMovies,
  Item,
  Img,
} from 'components/MoviesList/MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListOfMovies>
      {movies.map(movie => (
        <Item key={movie.id}>
          <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
            <Img src={movie.poster} alt={movie.title} />
            <TitleMovie>{movie.title}</TitleMovie>
          </LinkStyled>
        </Item>
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
