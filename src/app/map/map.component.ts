import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import  OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { defaults as defaultControls } from 'ol/control';
import { LocationService } from "../location.service"
import { Coordinate }from "../Coordinate";
import { Data } from "../Data";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  public map!:Map
  public mousePositionControl!:MousePosition
  public projectionSelect = document.getElementById('projection');
  public precisionInput = document.getElementById('precision');
  constructor(public locSer:LocationService) { }
  ngOnInit(): void {
    this.mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position')||"",
    });
    this.map = new Map({
      controls: defaultControls().extend([this.mousePositionControl]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
  updatePrecision(e:any){
    const format=createStringXY(e.target.value);
    this.mousePositionControl.setCoordinateFormat(format);
  }
  updateProjection(e:any){
    this.mousePositionControl.setProjection(e.target.value);
  }
  onClick(){
    debugger;
    let coors:Coordinate[]=[];
    coors.push(new Coordinate(16.345,15.656561));
    coors.push(new Coordinate(12.345,1.55551));
    let data=new Data(new Date().toISOString(),coors);
    this.locSer.Post(data).subscribe(()=>{alert("succes!")},()=>{alert("error!")});
  }
}
