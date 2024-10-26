import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faTwitter, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";
import {map, Observable, shareReplay} from "rxjs";

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
  faEnvelope = faEnvelope;

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
