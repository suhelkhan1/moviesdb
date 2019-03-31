import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  APP = environment.API_URL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
    params: new HttpParams({
      fromObject: {'api_key': environment.API_KEY}
    })
  };
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  /**Get the trending movies
   * @param media_type Type of the media like movies/tv show
   * @param time_window Trending time window like today/week
   */
  getTrendingMovies(media_type: string, time_window: string) {
    const url = this.APP + environment.URLS.TRENDING_MOVIES(media_type, time_window);
    return this.http.get(url, this.httpOptions);
  }

  /**Get the details of movie
   * @param id Id of the perticular movie
   */
  getMovie(id: number) {
    const url = this.APP + environment.URLS.GET_MOVIE(id);
    return this.http.get(url, this.httpOptions);
  }
  /**Get the images of movie
   * @param id Id of the perticular movie
   */
  getMovieImages(id: number) {
    const url = this.APP + environment.URLS.GET_MOVIE_IMAGES(id);
    return this.http.get(url, this.httpOptions);
  }

}
