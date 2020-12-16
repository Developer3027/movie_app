import React from 'react';
import { useHomeFetch } from './hooks/useHomeFetch';
// import {
//   API_URL,
//   API_KEY,
//   IMAGE_BASE_URL,
//   BACKDROP_SIZE,
//   POSTER_SIZE,
// } from '../config';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SB from './elements/SB';
import Spinner from './elements/Spinner';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();

  console.log('print received result', state);
  console.error('error getting movies: ', error);

  return (
    <>
      <HeroImage />
      <SB />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};
export default Home;
