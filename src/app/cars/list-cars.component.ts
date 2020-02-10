import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from './car.service';
import {Router} from '@angular/router';
@Component({
 
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars: Car[];
  searchTerm:string;  
  
  constructor( private _carService: CarService,private _router:Router) { }

  ngOnInit() {
    this.cars = this._carService.getCars();
  }
  
}
