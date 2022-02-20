import { Movie } from '../shared/services/movie/TMDBreturn';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popular: Movie[] = [];
  topRated: Movie[] = [];
  nowPlaying: Movie[] = [];
  upcoming: Movie[] = [];

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getPopular().subscribe((res) => {
      this.popular = res.results;
    });
    this.movieService.getTopRated().subscribe((res) => {
      this.topRated = res.results;
    });
    this.movieService.getNowPlaying().subscribe((res) => {
      this.nowPlaying = res.results;
    });
    this.movieService.getUpcoming().subscribe((res) => {
      this.upcoming = res.results;
    });
  }
}
