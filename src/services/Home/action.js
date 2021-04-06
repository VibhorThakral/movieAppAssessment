import {
  GET_MOVIE_GENRES_LIST,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_DATE_OLD,
  GET_MOVIE_LIST_DATE_RELEASES,
  GET_MOVIE_LIST_POPULARITY_LESS,
  GET_MOVIE_LIST_POPULARITY_MOST,
  GET_MOVIE_LIST_REVENUE_HIGHER,
  GET_MOVIE_LIST_REVENUE_LOWEST,
} from './constants';
import {
  URL_MOVIE_GENRES_LIST,
  URL_MOVIE_LIST,
  URL_MOVIE_LIST_DATE_OLD,
  URL_MOVIE_LIST_DATE_RELEASES,
  URL_MOVIE_LIST_POPULARITY_LESS,
  URL_MOVIE_LIST_POPULARITY_MOST,
  URL_MOVIE_LIST_REVENUE_HIGHER,
  URL_MOVIE_LIST_REVENUE_LOWEST,
} from './constants';

export const getMovieGenres = () => async dispatch => {
  const response = await fetch(URL_MOVIE_GENRES_LIST);
  const {genres} = await response.json();
  dispatch({
    type: GET_MOVIE_GENRES_LIST,
    payload: genres,
  });
};

export const getMovies = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST,
    payload: results,
  });
};

export const getOldestMoviesByRelease = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST_DATE_OLD);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST_DATE_OLD,
    payload: results,
  });
};

export const getLatestMoviesByRelease = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST_DATE_RELEASES);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST_DATE_RELEASES,
    payload: results,
  });
};

export const getLeastPopularMovies = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST_POPULARITY_LESS);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST_POPULARITY_LESS,
    payload: results,
  });
};

export const getMostPopularMovies = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST_POPULARITY_MOST);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST_POPULARITY_MOST,
    payload: results,
  });
};

export const getHighestRevenueMovie = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST_REVENUE_HIGHER);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST_REVENUE_HIGHER,
    payload: results,
  });
};

export const getLowestRevenueMovie = () => async dispatch => {
  const response = await fetch(URL_MOVIE_LIST_REVENUE_LOWEST);
  const {results} = await response.json();
  dispatch({
    type: GET_MOVIE_LIST_REVENUE_LOWEST,
    payload: results,
  });
};
