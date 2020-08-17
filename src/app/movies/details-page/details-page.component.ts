import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private movieDbService: ApiClientService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params) => {
        console.log(params);
        const category = params.get('category') || '';
        return this.movieDbService.getDetails('movie', id);
      })
    );
   }
}