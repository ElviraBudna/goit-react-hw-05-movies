// import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchReviews, normalizedReviews } from 'api/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Text, Title } from './Reviews.styled';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/';
// const MY_KEY = 'ebd45623275d587b48fa6048f565532d';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchReviews(movieId);
        const data = response.data.results;
        const result = normalizedReviews(data);

        setReviews(result);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching reviews');
      }
    };

    getReviews();
    // async function fetchMoviesCast() {
    //   try {
    //     const response = await axios.get(
    //       `${BASE_URL}/${movieId}/reviews?api_key=${MY_KEY}&language=en-US`
    //     );
    //     const data = response.data.results;
    //     const reviewsObj = data.map(({ id, author, content }) => ({
    //       id,
    //       author,
    //       content,
    //     }));
    //     return reviewsObj;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchMoviesCast().then(review => setReviews(review));
  }, [movieId]);

  return (
    <List>
      {!reviews.length ? (
        <Text>We do not have any reviews for this movie. </Text>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <Title>Author: {author}</Title>
            <Text>{content}</Text>
          </li>
        ))
      )}
    </List>
  );
}
