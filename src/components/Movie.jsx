import React from 'react';
import '../styles/Movie.css';
import { IMDB_URL } from '../config';
import noImageAvailable from '../images/noimg-l.png';

export const Movie = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? noImageAvailable : movie.Poster;
  const IMDB_LINK_URL = `${IMDB_URL}${movie.imdbID}`;

  return (
    <div className="movie">
      <a
        href={IMDB_LINK_URL}
        title="click to see more details of this film"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="content">
          <img src={poster} alt={`The movie titled: ${movie.Title}`} />
          <div>
            <h2 className="info">{movie.Title}</h2>
            <p>({movie.Year})</p>
          </div>
        </div>
      </a>
    </div>
  );
};
