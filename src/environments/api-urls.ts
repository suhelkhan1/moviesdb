export const API_URLS = {
  GET_MOVIE(movie_id){ return `movie/${movie_id}`},
  GET_MOVIE_IMAGES(movie_id){ return `movie/${movie_id}/images`},
  SEARCH_MOVIE: `search/movie`,
  SEARCH_TV_SHOW: `search/tv`,
  TRENDING_MOVIES(media_type, time_window){ return `trending/${media_type}/${time_window}`},
}