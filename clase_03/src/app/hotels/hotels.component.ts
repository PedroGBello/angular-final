import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Rental } from '../types/types';
import { ApiHotelsService } from '../services/api-hotels.service';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [AsyncPipe, HotelListComponent, LoadingComponent],
  template: `
    <section class="container">
      @if(hotelsResult$ | async; as hotelsList) {
      <app-hotel-list [hotels]="hotelsList" />
      }@else{
      <app-loading />
      }
    </section>
  `,
  styleUrl: './hotels.component.css',
})
export class HotelsComponent implements OnInit {
  // Guardar resultado de la petición HTTP en una variable del tipo Observable:
  public hotelsResult$!: Observable<Rental[]>;
  // Inyectamos el servicio en el componente:
  constructor(private apiHotels: ApiHotelsService) {}

  // Al montar el componente App se llama al servicio y se almacenan  los recursos  que devuelve en la variable observable hotelsResults$
  ngOnInit(): void {
    this.hotelsResult$ = this.apiHotels.getAll();
  }
}
