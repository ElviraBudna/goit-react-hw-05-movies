import { Suspense } from 'react';
import Notiflix from 'notiflix';
import { fetchMoviesById } from 'api/API';
// import axios from 'axios';
import BackLink from 'components/BackLink/BackLink';
import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetailsComponent';
// import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
// import { Loader } from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDetailsList,
  MovieDetailsText,
  MovieDetailsContainer,
  LinkStyled,
} from './Pages.styled';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/';
// const MY_KEY = 'ebd45623275d587b48fa6048f565532d';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  //   const [error, setError] = useState(false);
  //   const [loading, setLoading] = useState(false);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  // console.log('MovieDetails', location.state?.from);
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const respons = await fetchMoviesById(movieId);
        const data = respons.data;

        const objectMovie = {
          posterUrl: data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : `https://thumbs.dreamstime.com/b/%D0%B8-%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF-%D0%B0%D0%BA%D0%B0%D1%82%D0%B0-%D0%BA%D0%B8%D0%BD%D0%BE-48746594.jpg`,
          title: data.title,
          rating: data.vote_average.toFixed(1),
          tagline: data.tagline,
          date: data.release_date,
          countries: data.production_countries
            .map(({ name }) => name)
            .join(', '),
          genres: data.genres.map(({ name }) => name).join(', '),
          overview: data.overview,
        };
        setMovie(objectMovie);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error fetching movies');
        setMovie({});
      }
    };
    getMovieById();
    // async function fetchMoviesDetails() {
    //   try {
    //     setLoading(true);
    //     setError(false);
    //     const response = await axios.get(
    //       `${BASE_URL}/${movieId}?api_key=${MY_KEY}&language=en-US`
    //     );
    //     const data = response.data;
    //     console.log(response.status);
    //     let movieObj = {};
    //     console.log(response);
    //     console.log(response.statusText === 'Ok');
    //     // console.log(response.success);
    //     // if (response.success) {
    //     movieObj = {
    //       title: data.title || data.name,
    //       average: data.vote_average,
    //       overview: data.overview,
    //       genres: data.genres.map(({ name }) => name).join(', '),
    //       posterUrl: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
    //       date: data.release_date.split('-')[0],
    //     };
    //     // } else {
    //     //   setError(true);
    //     // }
    //     return movieObj;
    //   } catch (error) {
    //     if (error.response && error.response.status === 404) {
    //       console.log('Помилка 404: Сторінку не знайдено');
    //       setMovie([]);
    //       setError(true);
    //       return;
    //       // Виконайте додаткові дії для обробки помилки 404
    //     } else {
    //       console.log('Інша помилка', error);
    //     }
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchMoviesDetails().then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {/* {loading && <Loader />} */}
      {/* {error && <ErrorMessage name={'Oops, an error occurred!'} />} */}

      <MovieDetailsComponent movie={movie} movieId={movieId} />
      <MovieDetailsText>Additional information</MovieDetailsText>
      <MovieDetailsList>
        <li>
          <LinkStyled to="cast">Cast</LinkStyled>
        </li>
        <li>
          <LinkStyled to="reviews">Reviews</LinkStyled>
        </li>
      </MovieDetailsList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};
export default MovieDetails;
