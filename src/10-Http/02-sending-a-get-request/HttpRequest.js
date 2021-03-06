import React, { useState } from 'react';

import HttpRequestMoviesList from './components/HttpRequestMoviesList';
import './HttpRequest.css';

function HttpRequest() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch('https://swapi.py4e.com/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <HttpRequestMoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default HttpRequest;
