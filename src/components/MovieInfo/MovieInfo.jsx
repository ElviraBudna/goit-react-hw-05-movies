import PropTypes from 'prop-types';
import {
  MovieContainer,
  MovieImg,
  TextBox,
  Title,
  Span,
  Text,
  TitleText,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  return (
    <MovieContainer>
      <MovieImg src={movie.poster} alt={movie.title} />
      <TextBox>
        <Title>{movie.title}</Title>
        <TitleText>
          User score: <Span>{movie.rating}</Span>
        </TitleText>
        <TitleText>Overview:</TitleText>
        <Text>{movie.overview}</Text>
        <TitleText>Genres:</TitleText>
        <Text>{movie.genres}</Text>
      </TextBox>
    </MovieContainer>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
