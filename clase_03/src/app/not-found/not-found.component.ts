import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <h2>Page Not Found</h2>
    <p>We couldn't find that page!</p>
  `,
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
