import { Injectable } from '@angular/core';

const minClientWidth = 1080;
@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor() {}

  isSmallScreen(selector: string) {
    const element = document.querySelector(selector);
    if (element.clientWidth < minClientWidth) {
      return true;
    }
    return false;
  }
}
