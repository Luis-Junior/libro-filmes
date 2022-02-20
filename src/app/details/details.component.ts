import { TMDBmovieDetails } from './../shared/services/movie/TMDBmovieDetails';
import { MovieService } from './../shared/services/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  movie!: TMDBmovieDetails;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.movieService
      .getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe((res) => {
        this.movie = res;
        console.log(res);
      });
  }
}
