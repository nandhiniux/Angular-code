import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import { CarService } from './car.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private _id: number;
  car:Car;

  constructor( private _route: ActivatedRoute,
     private _carService:CarService ,
     private _router : Router ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params=>{
      this._id = +params.get('id');
      this.car =this._carService.getCar(this._id);
    }); 
   

  }
  viewNextCar(){

    if(this._id < 3){
      this._id = this._id +1;
    
    }
    else{
      this._id = 1;
    }
    this._router.navigate(['/cars',this._id]);
 
 
  }

}
