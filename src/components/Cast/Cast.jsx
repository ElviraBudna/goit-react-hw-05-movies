// import axios from 'axios';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo, normalizedCast } from 'api/API';
import { List, CastImg, Title, Text, Item } from './Cast.styled';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/';
// const MY_KEY = 'ebd45623275d587b48fa6048f565532d';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        const {
          data: { cast },
        } = await fetchCastInfo(movieId);

        setCast(normalizedCast(cast));
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching cast');
      }
    };

    getCastInfo();
    // async function fetchMoviesCast() {
    //   try {
    //     const response = await axios.get(
    //       `${BASE_URL}/${movieId}/credits?api_key=${MY_KEY}&language=en-US`
    //     );
    //     const data = response.data.cast;
    //     const castObj = data.map(
    //       ({ cast_id, name, character, profile_path }) => ({
    //         id: cast_id,
    //         name,
    //         character,
    //         actorUrl: `https://image.tmdb.org/t/p/w500${profile_path}`,
    //       })
    //     );
    //     return castObj;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchMoviesCast().then(castObj => setCast(castObj));
  }, [movieId]);
  return (
    <List>
      {!cast.length ? (
        <p>We do not have any information for this movie. </p>
      ) : (
        cast.map(({ id, name, character, actorUrl }) => (
          <Item key={id}>
            <CastImg src={actorUrl} alt={name} />
            <Title>
              Name: <Text>{name}</Text>
            </Title>
            <Title>
              Character: <Text>{character}</Text>
            </Title>
          </Item>
        ))
      )}
    </List>
  );
}
