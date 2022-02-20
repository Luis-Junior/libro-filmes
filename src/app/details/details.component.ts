import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { Movie } from 'src/app/shared/services/movie/TMDBreturn';
import { TMDBmovieDetails } from './../shared/services/movie/TMDBmovieDetails';
import { MovieService } from './../shared/services/movie/movie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  navigationSubscription$: any;
  movie!: TMDBmovieDetails;
  recommendations: Movie[] = [];
  similars: Movie[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.navigationSubscription$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getMovies();
        setTimeout(()=>{
          UtilsService.goTo('inicio');
        },200)
      }
    });
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription$) {
      this.navigationSubscription$.unsubscribe();
    }
  }

  getMovies() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.getMovieDetails(id);
    this.getSimilars(id);
    this.getRecommendations(id);
  }

  getMovieDetails(id: number) {
    this.movieService.getDetails(id).subscribe((res) => {
      this.movie = res;
      console.log(res);
    });
  }

  getRecommendations(id: number) {
    this.movieService
      .getRecommendations(id)
      .subscribe((res) => (this.recommendations = res.results));
  }

  getSimilars(id: number) {
    this.movieService
      .getSimilar(id)
      .subscribe((res) => (this.similars = res.results));
  }
}
