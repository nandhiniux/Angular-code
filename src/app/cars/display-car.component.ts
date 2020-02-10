import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './car.service';


@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.css']
})
export class DisplayCarComponent implements OnInit {

@Input() car:Car;
@Input() searchTerm: string;
@Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
confirmDelete = false;
isHidden = false;
  constructor( private _router:Router, private _carService:CarService) { }
  
  ngOnInit() {
  }
  viewCar(){
    this._router.navigate(['/cars',this.car.id],{queryParams: {'searchTerm':this.searchTerm}});
    }
  editCar(){
    this._router.navigate(['/edit',this.car.id]);
     }
     
  deleteCar() {
      this._carService.deleteCar(this.car.id);
    }

}
