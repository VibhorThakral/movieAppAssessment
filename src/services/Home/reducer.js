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

const initialState = {
  movieList: [],
  genresList: [],
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_GENRES_LIST:
      return {
        ...state,
        genresList: action.payload,
      };
    case GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };
    case GET_MOVIE_LIST_DATE_OLD:
      return {
        ...state,
        movieList: action.payload,
      };
    case GET_MOVIE_LIST_DATE_RELEASES:
      return {
        ...state,
        movieList: action.payload,
      };
    case GET_MOVIE_LIST_POPULARITY_LESS:
      return {
        ...state,
        movieList: action.payload,
      };
    case GET_MOVIE_LIST_POPULARITY_MOST:
      return {
        ...state,
        movieList: action.payload,
      };
    case GET_MOVIE_LIST_REVENUE_HIGHER:
      return {
        ...state,
        movieList: action.payload,
      };
    case GET_MOVIE_LIST_REVENUE_LOWEST:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
}
