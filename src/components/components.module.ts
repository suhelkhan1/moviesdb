import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "ionic-angular";
import { MovieCardComponent } from './movie-card/movie-card';
import { MovieListComponent } from './movie-list/movie-list';
const COMPONETS = [
	MovieCardComponent,
	MovieListComponent
]
@NgModule({
	declarations: [...COMPONETS],
	imports: [
		CommonModule,
		IonicModule
	],
	entryComponents: [...COMPONETS],
	exports: [...COMPONETS],
})
export class ComponentsModule { }
