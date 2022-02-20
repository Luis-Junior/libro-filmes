import { TMDBmovieDetails } from './TMDBmovieDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { TMDBreturn } from './TMDBreturn';
const API_URL = environment.apiMovieDBUrl;
const API_KEY = environment.apiMovieDBKey;

const language = 'pt-BR';
const region = 'BR';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  searchMovie(movieName: string) {
    return this.http.get<TMDBreturn>(
      `${API_URL}search/movie${API_KEY}&language=${language}&region=${region}&query=${movieName}`
    );
  }

  getPopular() {
    return this.http.get<TMDBreturn>(
      `${API_URL}movie/popular${API_KEY}&language=${language}&region=${region}`
    );
  }

  getTopRated() {
    return this.http.get<TMDBreturn>(
      `${API_URL}movie/top_rated${API_KEY}&language=${language}&region=${region}`
    );
  }
  getNowPlaying() {
    return this.http.get<TMDBreturn>(
      `${API_URL}movie/now_playing${API_KEY}&language=${language}&region=${region}`
    );
  }
  getUpcoming() {
    return this.http.get<TMDBreturn>(
      `${API_URL}movie/upcoming${API_KEY}&language=${language}&region=${region}`
    );
  }

  getDetails(movidId: number) {
    return this.http.get<TMDBmovieDetails>(
      `${API_URL}movie/${movidId}${API_KEY}&language=${language}`
    );
  }
  
  getRecommendations(movidId: number){
    return this.http.get<TMDBmovieDetails>(
      `${API_URL}movie/${movidId}/recommendations${API_KEY}&language=${language}`
    );
  }

  getSimilar (movidId: number){
    return this.http.get<TMDBmovieDetails>(
      `${API_URL}movie/${movidId}/similar${API_KEY}&language=${language}`
    );
  }
}
