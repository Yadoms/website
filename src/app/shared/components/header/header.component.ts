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

  constructor(private screenservice: ScreenService) {}

  ngOnInit() {
    this.isSmallScreen = this.screenservice.isSmallScreen('div');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.querySelector('mat-toolbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = this.screenservice.isSmallScreen('mat-toolbar');
  }
}
