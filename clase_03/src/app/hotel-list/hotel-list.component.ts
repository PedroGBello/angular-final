import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from '../types/types';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [],
  template: `
    <section class="hotel-list-component">
      <ul class="list">
        @for (hotel of hotels; track hotel.id) {
        <li class="list-item" (click)="onHotelClicked(hotel.id)">
          <article class="list-item__hotel-card">
            <div class="hotel-card__image">
              <img src="{{ hotel.images[0] }}" />
            </div>
            <div class="hotel-card__header">
              <h3 class="hotel-card__title">{{ hotel.location }}</h3>
              @if (hotel.isGuestFavorite) {<span class="guest-favourite"
                >Guest favourite! &#9733; {{ hotel.rating.toFixed(2) }}</span
              >} @else { &#9733; {{ hotel.rating.toFixed(2) }}}
              <div class="hotel-card__description">
                <p>{{ hotel.long_description }}</p>
              </div>
              <p>
                <strong class="total-price"
                  >£{{
                    (hotel.priceCents / 100).toLocaleString('en-GB')
                  }}</strong
                >
                night
              </p>
            </div>
          </article>
        </li>
        }
      </ul>
    </section>

    <!-- <table>
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Ubicación</th>
          <th scope="col">Categoría</th>
          <th scope="col">Servicios</th>
        </tr>
      </thead>
      <tbody>
        @for (hotel of hotels; track hotel.id) {
        <tr>
          <td class="hotel-name" (click)="onHotelClicked(hotel.id)">
            {{ hotel.nombre }}
          </td>
          <td>{{ hotel.ubicacion }}</td>
          <td>{{ hotel.categoria }}</td>
          <td>{{ hotel.servicios.join(', ') }}</td>
        </tr>
        }
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">Hotels count {{ hotels?.length }}</td>
        </tr>
      </tfoot>
    </table> -->
  `,
  styleUrl: './hotel-list.component.css',
})
export class HotelListComponent {
  constructor(private router: Router) {}
  @Input() hotels: Rental[] | null = [];
  onHotelClicked(hotelId: string | undefined): void {
    this.router.navigate(['/hotel', hotelId]);
  }
}
