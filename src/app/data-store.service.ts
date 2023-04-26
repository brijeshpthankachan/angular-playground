import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICars } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  getCars = (): Observable<Array<ICars>> => of([
    { carName: 'Toyota Camry' },
    { carName: 'Honda Civic' },
    { carName: 'Ford Mustang' },
    { carName: 'Chevrolet Corvette' },
    { carName: 'BMW 3 Series' },
    { carName: 'Mercedes-Benz C-Class' },
    { carName: 'Audi A4' },
    { carName: 'Lamborghini Vendor' },
    { carName: 'Ferrari 488 GTB' },
    { carName: 'Porsche 911' }
  ])

}
