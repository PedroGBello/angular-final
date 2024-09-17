import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `
    <article class="loading">
      <p>Loading...</p>
    </article>
  `,
  styleUrl: './loading.component.css',
})
export class LoadingComponent {}
