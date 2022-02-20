import { MovieCarouselModule } from './../shared/components/movie-carousel/movie-carousel.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SearchMovieComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
    MovieCarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
