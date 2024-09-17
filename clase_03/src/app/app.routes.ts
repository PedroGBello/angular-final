import { Routes } from '@angular/router';

import { AccountComponent } from '../app/account/account.component';
import { HotelsComponent } from '../app/hotels/hotels.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { NotFoundComponent } from '../app/not-found/not-found.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent, title: 'Account' },
  { path: 'hotels', component: HotelsComponent, title: 'Hotels' },
  { path: 'hotel/:id', component: HotelCardComponent, title: 'Hotel' },
  { path: '**', component: NotFoundComponent },
];
