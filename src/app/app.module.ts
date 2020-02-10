import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarService } from './cars/car.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCarsComponent } from './cars/list-cars.component';
import { CreateCarComponent } from './cars/create-car.component';
import { DisplayCarComponent } from './cars/display-car.component';
import { DetailsComponent } from './cars/details.component';

 
const appRoutes : Routes = [
{path: 'list', component: ListCarsComponent},
{ path: 'edit/:id', component: CreateCarComponent},
{ path: 'cars/:id', component: DetailsComponent},
{ path: '', redirectTo: '/list', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ListCarsComponent,
    CreateCarComponent,
    DisplayCarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
