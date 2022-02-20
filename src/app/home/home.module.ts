import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { ImgAdressPipe } from './movie-carousel/img-adress.pipe';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    MovieCarouselComponent,
    ImgAdressPipe,
    SearchMovieComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SwiperModule
  ]
})
export class HomeModule { }
