import { Injectable } from '@angular/core';
import {Car} from '../models/car.model';



@Injectable()
export class CarService {
    private listCars: Car[] = [
        {
            id: 1,
            name: 'LEAF',
            brand: '1',
            cost : '$31,600',
            features: '110 kW AC synchronous electric motor',
            year: new Date('1/1/2020'),
            availability: 'Yes',
            photoPath:'https://user-images.githubusercontent.com/60717471/74196312-8f992980-4c22-11ea-97d9-9a20c30d06cb.png'
           
            },
            {
              id: 2,
              name: 'Maxima',
              brand: '1',
              cost : '$34,250 ',
              features: '300-hp, 3.5-liter DOHC 24-valve V6 engine',
              year: new Date('1/1/2020'),
              availability: 'Yes',
              photoPath:'https://user-images.githubusercontent.com/60717471/74196989-14d10e00-4c24-11ea-8190-0a1a380be12d.png'
            
              },
              {
                id: 3,
                name: 'Versa',
                brand: '1',
                cost : '$14,730 ',
                features: '1.6-liter DOHC 16-valve 4-cylinder engine',
                year: new Date('1/1/2020'),
                availability: 'Yes',
                photoPath:'https://user-images.githubusercontent.com/60717471/74197063-40ec8f00-4c24-11ea-9311-9b3bfcc4e19c.png'
              
                },
        
    ];
    getCars(): Car[] {
        return this.listCars;
    }
    getCar(id:number): Car {
        return this.listCars.find(e=>e.id=== id);
    }
    save(car: Car) {
        if (car.id === null){
            const maxid = this.listCars.reduce(function(e1,e2){
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
            car.id = maxid + 1;
            this.listCars.push(car);
        }else{
            const foundIndex = this.listCars.findIndex(e => e.id === car.id);
            this.listCars[foundIndex] = car;
        }
        
    }
    deleteCar (id: number) {
        const i = this.listCars.findIndex( e => e.id === id);
        if(i !== -1){
            this.listCars.splice(i,1)
        }
    }

}  
