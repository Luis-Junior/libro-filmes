import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour'
})
export class MinutesToHourPipe implements PipeTransform {

  transform(totalMinutes: number): string {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes % 60);
    return hours + ' h ' + minutes + ' m';
  }

}
