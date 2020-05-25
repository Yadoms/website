import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ScreenService } from '../../services/screen.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {
  isExpanded: boolean;
  isSideNavExpanded: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private screenService: ScreenService
  ) {}
  ngOnInit(): void {
    this.isSideNavExpanded = this.screenService.isSmallScreen('div');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    {
      this.isSideNavExpanded = this.screenService.isSmallScreen('div');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 0 || this.screenService.isSmallScreen('div')) {
      this.isSideNavExpanded = true;
    } else {
      this.isSideNavExpanded = false;
    }
  }
}
