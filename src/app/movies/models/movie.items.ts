import { Movie } from './movie';
import { MovieBanner } from '.';

export interface MovieItems {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieBanner[];
}
