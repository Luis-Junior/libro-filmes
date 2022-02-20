import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { SharedModule } from '../shared/shared.module';
import { MovieCarouselModule } from '../shared/components/movie-carousel/movie-carousel.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MovieCarouselModule,
    SharedModule
  ]
})
export class DetailsModule { }
