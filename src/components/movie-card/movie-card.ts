import { MoviePage } from './../../pages/movie/movie';
import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../models';
import { NavController } from 'ionic-angular';
import { environment } from '../../environments/environment';
/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html'
})
export class MovieCardComponent implements OnInit {

  @Input() movie: IMovie;
  imageUrl;

  constructor(
    public navCtrl: NavController
  ) {}
  ngOnInit() {
    this.imageUrl = environment.IMAGES + this.movie.poster_path;
    console.log(this.imageUrl)
  }

  goToMoviePage(item: IMovie){
    this.navCtrl.push(MoviePage, {
      id: item.id,
      name: item.original_title || item.original_name
    });
  }

}
