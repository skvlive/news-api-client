import { HttpParams } from '@angular/common/http';

export class MovieDbRequest {
  url: string;
  params: HttpParams;
  constructor(url: string, params: HttpParams) {
    this.url = url;
    this.params = params;
  }
}
