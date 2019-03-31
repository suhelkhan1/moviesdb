import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviePage } from './../../pages/movie/movie';
import { IMovie } from './../../models/movie.model';

/**
 * Generated class for the MovieListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieListComponent {

  @Input() movies: IMovie[];

  constructor(
    public navCtrl: NavController
  ) {}

  goToMoviePage(item: IMovie){
    this.navCtrl.push(MoviePage, {
      id: item.id,
      name: item.original_title || item.original_name
    });
  }

}
