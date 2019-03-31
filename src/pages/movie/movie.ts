import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from './../../providers/movie/movie';
import { environment } from '../../environments/environment';

@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movie;
  name;
  imageUrl = environment.IMAGES;
  images;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider
  ) {
    this.getMovie(this.navParams.get('id'));
    this.name = this.navParams.get('name');
  }

  getMovie (id: number) {
    this.movieProvider.getMovie(id).subscribe((res) => {
      this.movie = res;
      this.movieProvider.getMovieImages(id).subscribe((res) => {
        this.images = res;
      });
    })
  }

}
