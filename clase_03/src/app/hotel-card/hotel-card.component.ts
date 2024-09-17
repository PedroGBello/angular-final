import { Component, Input, inject } from '@angular/core';
import { Rental } from '../types/types';
import { ApiHotelsService } from '../services/api-hotels.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent],
  template: `
    @let hotel = (hotel$ | async); @if(!hotel) {
    <app-loading />
    } @else {
    <section class="hotel-card">
      <h2 class="hotel-card__title">{{ hotel.name }}</h2>
      <article class="gallery">
        <img src="{{ hotel.images[0] }}" alt="{{ hotel.name }}" />
        <img src="{{ hotel.images[1] }}" alt="{{ hotel.name }}" />
        <img src="{{ hotel.images[2] }}" alt="{{ hotel.name }}" />
        <img src="{{ hotel.images[3] }}" alt="{{ hotel.name }}" />
        <img src="{{ hotel.images[4] }}" alt="{{ hotel.name }}" />
      </article>
      <header class="header-flex">
        <div class="header-flex__left">
          <strong class="hotel-card__location"
            >{{ hotel.short_description }} in {{ hotel.location }}</strong
          >
          <ol class="hotel-card__esentials">
            <li class="esential-item">
              {{
                hotel.guests > 1
                  ? hotel.guests + ' guests'
                  : hotel.guests + ' guest'
              }}
            </li>
            <li class="esential-item">
              {{
                hotel.bedrooms > 1
                  ? hotel.bedrooms + ' bedrooms'
                  : hotel.bedrooms + ' bedroom'
              }}
            </li>
            <li class="esential-item">
              {{ hotel.beds > 1 ? hotel.beds + ' beds' : hotel.beds + ' bed' }}
            </li>
            <li class="esential-item">
              {{
                hotel.bathrooms > 1
                  ? hotel.bathrooms + ' bathrooms'
                  : hotel.bathrooms + ' bathroom'
              }}
            </li>
          </ol>
        </div>
        <div class="header-flex__right">
          <p>
            <strong class="total-price"
              >£{{ (hotel.priceCents / 100).toLocaleString('en-GB') }}</strong
            >
            night
          </p>
        </div>
      </header>
      @if (hotel.isGuestFavorite) {
      <p class="guest-favourite">
        <strong>Guest favourite!</strong> &#9733;
        {{ hotel.rating.toFixed(2) }} | {{ hotel.reviews }} reviews
      </p>
      } @else {
      <p class="rating">
        &#9733; {{ hotel.rating.toFixed(2) }} | {{ hotel.reviews }} reviews
      </p>
      }
      <div class="hotel-card__host">
        <img
          class="host-avatar"
          src="{{ hotel.host.avatar }}"
          alt="{{ hotel.host.name }}"
        />
        <div class="flex-right">
          <p class="host-name">Hosted by {{ hotel.host.name }}</p>
          <ol class="host-info">
            @if (hotel.host.isSuperhost) {
            <li class="info-item">Superhost</li>
            }
            <li class="info-item">{{ hotel.host.timeAsHost }} hosting</li>
          </ol>
        </div>
      </div>
      <div class="hotel-card__description">
        <p>{{ hotel.long_description }}</p>
        <button class="button-show-more">
          <span class="show-more">Show more</span> &#8250;
        </button>
      </div>
      <ul class="hotel-card__services">
        @for (service of hotel.services; track $index) {
        <li class="service-item">{{ service }}</li>
        }
      </ul>
      <button class="button-reserve">Reserve</button>
    </section>
    }
  `,
  styleUrl: './hotel-card.component.css',
})
export class HotelCardComponent {
  public hotel$!: Observable<Rental>;
  private apiHotel: ApiHotelsService = inject(ApiHotelsService);
  @Input('id') hotelId!: string;

  ngOnInit(): void {
    this.hotel$ = this.apiHotel.getOne(this.hotelId);
  }
}
