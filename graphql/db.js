import fetch from 'node-fetch';
const API_URL = 'https://yts.mx/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {
  // fetch(`${API_URL}`).then(res => res.json()).then(json => json.data.movies);
  let REQEUST_URL = API_URL;
  if (limit > 0) {
    REQEUST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQEUST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQEUST_URL).then(res => res.json()).then(json => json.data.movies);
};
