import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img className='clickable' src={image} alt='movie thumb nail' />
      ) : (
        <img src={image} alt='movie thumb nail' />
      )}
    </StyledMovieThumb>
  );
};
export default MovieThumb;
