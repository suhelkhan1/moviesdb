import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "ionic-angular";
import { ComponentsModule } from './../components/components.module';
import {
  HomePage,
  SearchPage,
  FavoritesPage,
  TabsControllerPage,
  LoginPage,
  SignupPage,
  MoviePage
} from '../pages';
const PAGES = [
  HomePage,
  SearchPage,
  FavoritesPage,
  TabsControllerPage,
  LoginPage,
  SignupPage,
  MoviePage
]
@NgModule({
  declarations: [...PAGES],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
  ],
  entryComponents: [...PAGES],
  exports: [...PAGES],
})
export class PagesModule { }
