import { Injectable } from '@angular/core';
import { Car} from '../models/car.model';



@Injectable()
export class CarService {
    private listCars: Car[] = [
        {
            id: 1,
            name: 'Sedan',
            brand: '3',
            cost: '$31,600',
            features: '110 kW AC synchronous electric motor',
            availability: 'Yes',
            noOfAvailability: 3

        },
        {
            id: 2,
            name: 'Maxima',
            brand: '1',
            cost: '$34,250 ',
            features: '300-hp, 3.5-liter DOHC 24-valve V6 engine',
            availability: 'Yes',
            noOfAvailability: 2

        },
        {
            id: 3,
            name: 'MDX',
            brand: '2',
            cost: '$14,730 ',
            features: '1.6-liter DOHC 16-valve 4-cylinder engine',
            availability: 'Yes',
            noOfAvailability: 1

        },

    ];
   
    getCars(): Car[] {
        return this.listCars;
    }
    
    getCar(id: number): Car {
        return this.listCars.find(e => e.id === id);
    }
    
    save(car: Car) {
        if (car.id === null) {
            const maxid = this.listCars.reduce(function (e1, e2) {
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
            car.id = maxid + 1;
            this.listCars.push(car);
        } else {
            const foundIndex = this.listCars.findIndex(e => e.id === car.id);
            this.listCars[foundIndex] = car;
        }

    }
    deleteCar(id: number) {
        const i = this.listCars.findIndex(e => e.id === id);
        if (i !== -1) {
            this.listCars.splice(i, 1)
        }
    }

}  
