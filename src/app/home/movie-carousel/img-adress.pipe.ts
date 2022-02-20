import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgAdress',
})
export class ImgAdressPipe implements PipeTransform {
  transform(adress?: string): string {
    if(!adress){
      return 'assets/svg/not_found.svg'
    }
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${adress}`;
  }
}
