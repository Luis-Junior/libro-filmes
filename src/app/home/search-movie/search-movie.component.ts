import { MovieService } from './../../shared/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Movie } from 'src/app/shared/services/movie/TMDBreturn';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  searchInput = new FormControl();

  searchResult: Movie[] | null = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(debounceTime(300))
      .pipe(
        tap((typedValue) => {
          if (typedValue.length === 0) {
            this.searchResult = [];
          }
        })
      )
      .pipe(
        filter(
          (typedValue) =>
            typedValue.length >= 3 && typedValue && typedValue !== null
        )
      )
      .pipe(distinctUntilChanged())
      .pipe(
        switchMap((typedValue) => this.movieService.searchMovie(typedValue))
      )
      .subscribe((res) => {
        if (res.results.length) {
          this.searchResult = res.results;
        } else {
          this.searchResult = null;
        }
      });
  }
}
