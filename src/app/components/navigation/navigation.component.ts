import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {faLinkedin, faTwitter, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isMobile:boolean = false;

  faLinkedIn = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faFacebook = faFacebook;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {
    this.isHandset$.subscribe(value => {
      this.isMobile = value;
    });

  }

}
