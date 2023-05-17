// import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchQueryMovies, normalizeMoviesList } from 'api/API';
// import ButtonLoadMore from 'components/ButtonLoadMore/Button';
// import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import MoviesComponent from 'components/MoviesComponent/MoviesComponent';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieContainer } from './Pages.styled';

// const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
// const MY_KEY = 'ebd45623275d587b48fa6048f565532d';
// let totalPage = null;

export default function Movies() {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const [query, setQuery] = useState(searchParams.get('query') || '');
  // const [loadMore, setLoadMore] = useState(false);
  //   const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const fromParams = searchParams.get('query');

  //   const [searchMovies, setSearchMovies] = useState([]);

  // console.log(searchParams.get('query'));

  useEffect(() => {
    if (fromParams === null) {
      return;
    }
    try {
      const getQueryMovies = async () => {
        setLoading(true);
        const {
          data: { results },
        } = await fetchQueryMovies(fromParams);
        if (!results.length) {
          Notiflix.Notify.warning(
            'Oops there are no movies by this search, try another title'
          );
        }
        setMovies(normalizeMoviesList(results));
      };

      getQueryMovies();
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('Error fetching movies');
    } finally {
      setLoading(false);
    }
    // async function fetchApiForNameMovies() {
    //   try {
    //     // if (!query) {
    //     //   return;
    //     // }
    //     setLoading(true);
    //     // setLoadMore(false);
    //     setError(false);
    //     let searchMovies = [];
    //     if (query) {
    //       const response = await axios.get(
    //         `${BASE_URL}?api_key=${MY_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    //       );
    //       searchMovies = response.data.results;
    //       // setTotalPage(response.data.total_pages);
    //       if (searchMovies.length === 0) {
    //         setError(true);
    //       }
    //     }
    //     if (searchMovies.length > 0) {
    //       searchMovies = searchMovies.map(({ id, title, poster_path }) => ({
    //         id,
    //         title,
    //         posterUrl: `https://image.tmdb.org/t/p/w500${poster_path}`,
    //       }));
    //       // if (searchMovies.length === 20 || totalPage > page) {
    //       //   setLoadMore(true);
    //       // }
    //       // setLoadMore(true);
    //     }
    //     return searchMovies;
    //   } catch (error) {
    //     setSearchMovies([]);
    //     // setLoadMore(false);
    //     setError(true);
    //     setPage(1);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchApiForNameMovies().then(movie =>
    //   setSearchMovies(prevState => [...prevState, ...movie])
    // );
  }, [fromParams, searchParams]);

  //   const updateQueryString = query => {
  //     const nextParams = query !== '' ? { query } : {};
  //     setSearchParams(nextParams);
  //   };

  //   const formSubmitHandler = data => {
  //     setQuery(() => data);
  //     setMovies([]);
  //     updateQueryString(data);
  //     // setPage(1);
  //   };
  const onChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search?.value;
    if (!value || value.trim() === '') {
      Notiflix.Notify.failure('Enter title of movie to search');
      return;
    }
    setQuery(value.toLowerCase().trim());
    setSearchParams({ query: value.toLowerCase().trim() });
  };

  // const onClickLoadMore = () => {
  //   // if (totalPage > page) {
  //   //   console.log(totalPage > page);
  //   //   setPage(prevState => prevState + 1);
  //   //   setLoadMore(true);
  //   // } else {
  //   //   setLoadMore(false);
  //   // }
  //   console.log(totalPage > page);
  //   setPage(prevState => prevState + 1);
  //   setLoadMore(true);
  //   if (totalPage === page) {
  //     setLoadMore(false);
  //   }
  // };

  return (
    <MovieContainer>
      <SearchBar onSubmit={handleSubmit} value={query} onChange={onChange} />
      {loading && <Loader />}
      {movies ? <MoviesComponent movies={movies} /> : <></>}
      {/* {error && <ErrorMessage name={query} />} */}
      {/* {!error && <MoviesComponent movies={searchMovies} />} */}
      {/* {loadMore && <ButtonLoadMore onClick={() => onClickLoadMore()} />} */}
    </MovieContainer>
  );
}
