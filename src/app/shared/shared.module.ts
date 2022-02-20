import { ImgAdressPipe } from './pipes/img-adress.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesToHourPipe } from './pipes/minutes-to-hour.pipe';

@NgModule({
  declarations: [ImgAdressPipe, MinutesToHourPipe],
  imports: [CommonModule],
  exports: [ImgAdressPipe, MinutesToHourPipe],
})
export class SharedModule {}
