import { Component, Input, OnInit } from '@angular/core';
import { MovieBanner } from '../models';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movieBanner: MovieBanner;
  @Input() index: number;
  imageUrl: string;
  releaseDate: string;

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = environment.imageUrl + this.movieBanner.poster_path;
    this.releaseDate = formatDate(this.movieBanner.release_date, 'MMM dd, yyyy', 'en-US');
   }
}
