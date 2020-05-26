import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isSmallScreen: boolean;
  element: Element;
  constructor(private screenservice: ScreenService) {}

  ngOnInit() {
    this.isSmallScreen = this.screenservice.isSmallScreen('div');
    this.element = document.querySelector('mat-toolbar');
    if (this.isSmallScreen) {
      this.element.classList.remove('mat-toolbar');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > this.element.clientHeight && !this.isSmallScreen) {
      this.element.classList.add('scrolled');
    } else {
      this.element.classList.remove('scrolled');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = this.screenservice.isSmallScreen('mat-toolbar');
    if (this.isSmallScreen) {
      this.element.classList.remove('mat-toolbar');
    } else {
      this.element.classList.add('mat-toolbar');
    }
  }
}
