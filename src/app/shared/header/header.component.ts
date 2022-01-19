import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gpc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  screenWidth: number = 0;

  constructor() { }

  ngOnInit() {
    this.screenWidth = window.screen.width;
  }

}
