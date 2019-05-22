import React, { useReducer, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Movie } from './components/Movie';
import { Search } from './components/Search';
import { Spinner } from './components/Spinner';
import { MOVIE_API_URL, BASE_URL, MY_API_KEY } from './config';

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        errorMessage: null
      });

    case 'SEARCH_MOVIES_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        movies: action.payload
      });

    case 'SEARCH_MOVIES_FAILURE':
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.error
      });

    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonResponse.Search
        });
      });
  }, []);
  const search = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST'
    });
    fetch(`${BASE_URL}${searchValue}&${MY_API_KEY}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="React Hooks Film Search" />
      <p className="app-intro">Search for your favorite films</p>
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
