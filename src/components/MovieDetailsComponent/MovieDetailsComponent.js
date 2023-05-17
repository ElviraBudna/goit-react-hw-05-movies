import {
  MovieImg,
  MovieContainer,
  TextBox,
  Title,
  Span,
  Text,
  TitleText,
} from './MovieDetailsComponent.styled';
import defaultImage from 'img/photo.jpg';

export default function MovieDetailsComponent({ movie }) {
  const { title, average, posterUrl, overview, genres } = movie;
  const handleImageError = event => {
    event.target.src = defaultImage;
  };

  return (
    <MovieContainer>
      <MovieImg src={posterUrl} onError={handleImageError} alt={title} />
      <TextBox>
        <Title>{title}</Title>
        <TitleText>
          User score: <Span>{average}</Span>
        </TitleText>
        <TitleText>Overview:</TitleText>
        <Text>{overview}</Text>
        <TitleText>Genres:</TitleText>
        <Text>{genres}</Text>
      </TextBox>
    </MovieContainer>
  );
}
