import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { DetailsPageComponent } from './details-page/details-page.component'
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NavListComponent } from './nav-list/nav-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieDetailsComponent, MovieComponent, DetailsPageComponent, MainPageComponent,
     NavListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MoviesRoutingModule,
    ReactiveFormsModule
  ],
})
export class MoviesModule { }
