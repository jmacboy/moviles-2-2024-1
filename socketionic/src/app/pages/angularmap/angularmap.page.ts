import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularmap',
  templateUrl: './angularmap.page.html',
  styleUrls: ['./angularmap.page.scss'],
})
export class AngularmapPage {
  center: google.maps.LatLngLiteral = {
    lat: -17.768995,
    lng: -63.182661
  };
  points: any[] = [
    {
      position: {
        lat: -17.776871,
        lng: -63.180784,
      }
    },
    {
      position: {
        lat: -17.783796,
        lng: -63.181838,
      }
    },
  ];
  constructor() { }


}
