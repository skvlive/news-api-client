import { Injectable } from '@angular/core';
import { Observable, EMPTY, from } from 'rxjs';
import { map, catchError, share } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie, MovieItems, MovieBanner } from '../models';
import { MovieDbRequestBuilder } from './movie-db-request-builder'

@Injectable({
  providedIn: 'root',
})

export class ApiClientService {
  errorMovies: MovieBanner[] = [{
    popularity: 0,
    vote_count: 0,
    video: false,
    poster_path: '/cHxvMuaDk5rbswQlt2BaKVzvsxf.jpg',
    id: 0,
    adult: false,
    backdrop_path: '',
    original_language: '',
    original_title: '',
    genre_ids: [
      0,
      0
    ],
    title: 'Get Your Own Api Key from The Movie DB!',
    vote_average: 0,
    overview: 'empty',
    release_date: ''
  }];

  errorMovie: Movie = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: {
      id: 0,
      name: '',
      poster_path: '',
      backdrop_path: '',
    },
    budget: 0,
    genres: null,
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: 'Get Your Own Api Key from The Movie DB Website.',
    popularity: 0,
    poster_path: '/cHxvMuaDk5rbswQlt2BaKVzvsxf.jpg',
    production_companies: [{
      id: 0,
      logo_path: '',
      name: '',
      origin_country: '',
    }],
    production_countries: [{
      iso3166_1: '',
      name: '',
    }],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [{
      iso_639_1: '',
      name: '',
    }],
    status: '',
    tagline: '',
    title: 'Error!',
    video: false,
    vote_average: 0,
    vote_count: 0
  };
  
  constructor(private http: HttpClient) { }

  discoverMovies(category = '', language = 'en-US', rating = 7, sortBy = 'popularity.desc'): Observable<MovieBanner[]> {
    const request = new MovieDbRequestBuilder()
      .discover()
      .typeMovie()
      .inLanguage(language)
      .withRatingGTE(rating)
      .sortBy(sortBy)
      .build();
    return this.callDiscoverApi(request.url, request.params);
  }

  getDetails(type: string, id: string): Observable<Movie> {
    const request = new MovieDbRequestBuilder()
      .withId(type, id)
      .build();
    return this.callMovieApi(request.url, request.params);
  }

  callDiscoverApi(url: string, params: HttpParams): Observable<MovieBanner[]> {
    return this.http
      .get<MovieItems>(url, { params })
      .pipe(
        map((res) => res.results),
        map((movieBanners: MovieBanner[]) =>
        movieBanners.filter((p) => {
            const isReleased = p.release_date != '';
            return true;
          })
        ),
        catchError((err) => {
          console.log(err);
          return from([this.errorMovies]);
        }),
        share()
      );
  }

  callMovieApi(url: string, params: HttpParams): Observable<Movie> {
    return this.http.
    get<Movie>(url, { params })
    .pipe(
      catchError((err) => {
        console.log(err);
        return from([this.errorMovie]);
      })
    );
   }
}
