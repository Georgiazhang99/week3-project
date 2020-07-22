import { Component, OnInit } from '@angular/core';
import { Map } from '../map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Map = {
    id: 1,
    name: 'Map Visualisation'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
