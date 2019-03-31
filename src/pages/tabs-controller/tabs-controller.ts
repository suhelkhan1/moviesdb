import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = FavoritesPage;
  constructor(public navCtrl: NavController) {
  }
  
}
