import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand } from '../models/brand.model';
import { Car } from '../models/car.model';
import { CarService } from './car.service';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  previewPhoto = false;
  brand = '1';
  car : Car;
  panelTitle: string;

 
  brands : Brand[] = [

    {id:1, name:'Nissan'},
    {id:2, name:'Acura'},
    {id:3, name:'BMW'},
    {id:4, name:'Audi'},
    {id:5, name:'Chevrolet'},
     
  ];
  

  constructor(private _carService: CarService,
              private _router : Router,
              private _route: ActivatedRoute ) { }

 togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getCar(id);
    });
  }
  private getCar(id:number){
    if(id === 0){
      this.car = {
        id: null,
        name: null,
        brand: 'select' ,
        cost: null,
        features: null,
        availability : null,
        noOfAvailability:null
        }; 
        this.panelTitle ='Create New Car';
    }
    else{
      this.panelTitle ='Edit Car';
      this.car = Object.assign({}, this._carService.getCar(id)) ;
    }
  }
  saveCar(): void {
    const newCar : Car = Object.assign({},this .car);
    this._carService.save(newCar);   
  
    this._router.navigate(['list']);
    
  }

}
