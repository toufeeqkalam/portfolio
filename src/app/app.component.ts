import { Component } from '@angular/core';
import {faLinkedin, faTwitter, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  faLinkedIn = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faFacebook = faFacebook;

}
