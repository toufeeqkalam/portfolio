import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  route: string = "";
  data: any;
  year: number = new Date().getFullYear();
  safeUrl: SafeResourceUrl;

  constructor(private httpClient: HttpClient, public location: Location, public router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route = location.href;
    this.httpClient.get("https://api.github.com/users/toufeeqkalam").subscribe((data: any) => {
      this.data = data;
    });
  }

}
