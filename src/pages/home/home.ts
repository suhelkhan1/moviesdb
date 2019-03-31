import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { IMovie } from '../../models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  trendingMovies: IMovie[];
  constructor(
    public navCtrl: NavController,
    public movieProvider: MovieProvider
  ) {}
  ngOnInit() {
    this.movieProvider.getTrendingMovies('all', 'week').subscribe((res: any) => {
      this.trendingMovies = res.results;
    })
  }

}
