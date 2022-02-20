import { Component, Input, OnInit } from '@angular/core';

import { Movie } from 'src/app/shared/services/movie/TMDBreturn';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
})
export class MovieCarouselComponent implements OnInit {
  @Input() title = '';
  @Input() movies: Movie[] = [];
  config: SwiperOptions = {
    watchSlidesProgress: true,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1.4,
        spaceBetween: 50
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3.4,
        spaceBetween: 30
      },
      1536: {
        slidesPerView: 4.4,
        spaceBetween: 30
      }
    }
  };
  constructor() {}

  ngOnInit(): void {}
}
