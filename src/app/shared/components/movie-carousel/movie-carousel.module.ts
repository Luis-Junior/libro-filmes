import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { MovieCarouselComponent } from './movie-carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [MovieCarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    SharedModule
  ],
  exports:[MovieCarouselComponent]
})
export class MovieCarouselModule { }
