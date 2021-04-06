/* ActionTypes */
export const GET_MOVIE_LIST = 'GET_MOVIE_LIST';
export const GET_MOVIE_GENRES_LIST = 'GET_MOVIE_GENRES_LIST';
export const GET_MOVIE_LIST_DATE_RELEASES = 'GET_MOVIE_LIST_DATE_RELEASES';
export const GET_MOVIE_LIST_DATE_OLD = 'GET_MOVIE_LIST_DATE_OLD';
export const GET_MOVIE_LIST_POPULARITY_MOST = 'GET_MOVIE_LIST_POPULARITY_MOST';
export const GET_MOVIE_LIST_POPULARITY_LESS = 'GET_MOVIE_LIST_POPULARITY_LESS';
export const GET_MOVIE_LIST_REVENUE_HIGHER = 'GET_MOVIE_LIST_REVENUE_HIGHER';
export const GET_MOVIE_LIST_REVENUE_LOWEST = 'GET_MOVIE_LIST_REVENUE_LOWEST';

/* API KEY for MovieDB */
export const APIKEY_V3 = '0e7213510a0b75d1a038bbb10ded9f2d';

/* List Of Genres */
export const URL_MOVIE_GENRES_LIST = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY_V3}`;

/* URL List Of Movies With Filters */
export const URL_MOVIE_LIST = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}`;

export const URL_MOVIE_LIST_POPULARITY_MOST = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=popularity.desc`;

export const URL_MOVIE_LIST_POPULARITY_LESS = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=popularity.asc`;

export const URL_MOVIE_LIST_DATE_RELEASES = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=release_date.desc`;

export const URL_MOVIE_LIST_DATE_OLD = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=release_date.asc`;

export const URL_MOVIE_LIST_REVENUE_HIGHER = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=revenue.desc`;

export const URL_MOVIE_LIST_REVENUE_LOWEST = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY_V3}&sort_by=revenue.asc`;
