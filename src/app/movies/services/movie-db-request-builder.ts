import { MovieDbRequest } from './movie-db-request';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class MovieDbRequestBuilder {
  url = environment.movieDbUrl;
  apiKey = environment.apiKey;
  params = new HttpParams();

  typeMovie() {
    this.url = this.url + 'movie';
    return this;
  }
  
  discover() {
    this.url = this.url + 'discover/';
    return this;
  }

  withId(type: string, id: string) {
    this.url = this.url + type + '/' + id;
    return this;
  }

  inLanguage(language: string) {
    if (language && language.trim())
      this.params = this.params.append('language', language);
    return this;
  }

  withRatingGTE(rating: number) {
    if (rating)
      this.params = this.params.append('vote_average.gte', rating.toString());
    return this;
  }

  sortBy(field: string) {
    if (field && field.trim())
      this.params = this.params.append('sort_by', field);
    return this;
  }

  build() {
    const params = this.params.append('api_key', this.apiKey);
    return new MovieDbRequest(this.url, params);
  }
}
