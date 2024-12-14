import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import axios from 'axios';
import Header from './Header';
import NavigationMenu from './NavigationMenu';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true); // Track loading state
  // const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchMovies = async () => {
      axios
        .get('http://localhost:3001/movies')
        .then((response) => setMovies(response.data))
        .catch((err) => console.log('Error:', err.message));
    };

    fetchMovies();
  }, []);

  return (
    <>
    <NavigationMenu />
    <div className='p-4'>
      
      <Header title='Movies List' subtitle='Dashboard All Movies' />

      <div className='flex gap-4 mb-4 overflow-x-auto'>
        {movies?.map((movie) => {
          console.log(movie);
          return (
            <div class='flex-none'>
              <MovieCard movieProps={movie} />
            </div>
          );
        })}
      </div>
      <div className='flex gap-4 overflow-x-auto'>
        {movies?.map((movie) => {
          return (
            <div class='flex-none'>
              <MovieCard movieProps={movie} />
            </div>
          );
        })}
      </div>

      <div className='flex gap-4 overflow-x-auto'>
        {movies?.map((movie) => {
          return (
            <div class='flex-none'>
              <MovieCard movieProps={movie} />
            </div>
          );
        })}
      </div>

      <div className='flex flex-wrap gap-4 w-full'>
        {movies?.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard movieProps={movie} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default MoviesList;