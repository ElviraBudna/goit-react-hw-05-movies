import { useState, useEffect } from 'react';
// import axios from 'axios';
import Notiflix from 'notiflix';
import { normalizeMoviesList, fetchTrendingMovies } from 'api/API';
import HomeList from 'components/HomeList/HomeList';
// import { Loader } from 'components/Loader/Loader';
// import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Title } from './Pages.styled';

// const BASE_URL_TRENDING = 'https://api.themoviedb.org/3/trending/all/day';
// const MY_KEY = 'ebd45623275d587b48fa6048f565532d';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchTrendingMovies();

        setMovies(normalizeMoviesList(results));
      };

      getTrendingMovies();
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Error fetching movies');
    }
    // async function fetchApiTrendingMovies() {
    //   try {
    //     setLoading(true);
    //     setError(false);
    //     const response = await axios.get(
    //       `${BASE_URL_TRENDING}?api_key=${MY_KEY}`
    //     );
    //     let trendingMovie = response.data.results;
    //     if (trendingMovie) {
    //       trendingMovie = trendingMovie.map(
    //         ({ id, name, title, poster_path }) => ({
    //           id,
    //           title: name || title,
    //           posterUrl: `https://image.tmdb.org/t/p/w500${poster_path}`,
    //         })
    //       );
    //       // if (trendingMovie.length === 0) {
    //       //   setError(true);
    //       // }
    //     }
    //     return trendingMovie;
    //   } catch (error) {
    //     setMovies([]);
    //     // setLoadMore(false);
    //     setError(true);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchApiTrendingMovies().then(movie => setMovies(movie));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      {/* {loading && <Loader />} */}
      {/* {error && <ErrorMessage name={'Oops, an error occurred!'} />} */}
      <HomeList movies={movies} />
    </div>
  );
};

export default Home;
