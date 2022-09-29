import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = -31.267637195891393;
  lng = -64.33131442649334;
  zoom = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
