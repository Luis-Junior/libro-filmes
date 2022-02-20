import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  static goTo(destination: any) {
    const element = document.querySelector('#' + destination);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
