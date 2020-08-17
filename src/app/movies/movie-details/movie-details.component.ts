import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  backdropUrl: string;
  posterUrl: string;
  releaseDate: string;

  constructor() { }

  ngOnInit(): void {
    this.backdropUrl = environment.imageUrl + this.movie.backdrop_path;
    this.posterUrl = environment.imageUrl + this.movie.poster_path;
    this.releaseDate = formatDate(this.movie.release_date, 'MMM dd, yyyy', 'en-US');
   }
}