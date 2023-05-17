import { useLocation } from 'react-router-dom';
import { LinkStyled, List, Img, Item } from './MoviesComponent.styled';
import defaultImage from 'img/photo.jpg';

export default function MoviesComponent({ movies }) {
  const location = useLocation();
  const handleImageError = event => {
    event.target.src = defaultImage;
  };
  return (
    <List>
      {movies.length > 0 ? (
        movies.map(({ id, title, posterUrl }) => (
          <Item key={id}>
            <LinkStyled to={`${id}`} state={{ from: location }}>
              <Img src={posterUrl} onError={handleImageError} alt={title} />
              {title}
            </LinkStyled>
          </Item>
        ))
      ) : (
        <></>
      )}
    </List>
  );
}
