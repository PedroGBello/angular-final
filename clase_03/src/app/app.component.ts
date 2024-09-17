import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="app-header">
      <h1>UTN.BA — MÓDULO 2 &#183; Angular</h1>
      <nav class="primary-nav">
        <a
          class="nav-link"
          ariaCurrentWhenActive="page"
          routerLink="/hotels"
          routerLinkActive="active-link"
          >Hotels</a
        >
        <a
          class="nav-link"
          ariaCurrentWhenActive="page"
          routerLink="/account"
          routerLinkActive="active-link"
          >Account</a
        >
      </nav>
    </header>
    <main class="app-main">
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
