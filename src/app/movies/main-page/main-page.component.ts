import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieBanner } from '../models';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  movieBanners$: Observable<MovieBanner[]>;

  constructor(
    private movieDbService: ApiClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieBanners$ = this.route.paramMap.pipe(
      switchMap((params) => {
        console.log(params);
        const category = params.get('category') || '';
        return this.movieDbService.discoverMovies();
      })
    );
    }
}
