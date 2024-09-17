import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import utn from 'assets/UTNBA-logo.jpg';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section class="signup-card">
      <article class="signup-card__left">
        <header class="signup-card__left-header">
          <h1>Hello there!</h1>
          <p>Please sign up to continue</p>
        </header>
        <!-- React Form -->
        <form
          class="signup-card__left-form"
          action="/"
          method="get"
          [formGroup]="userForm"
          (submit)="handleSubmit()"
        >
          <div class="form-item">
            <label for="userFirstName">First Name</label>
            <input
              id="userFirstName"
              formControlName="userFirstName"
              type="text"
              placeholder="John"
            />
            <div class="alert">
              <p [hidden]="firstName.valid || firstName.untouched">
                First Name is required
              </p>
            </div>
          </div>
          <div class="form-item">
            <label for="userLastName">Last Name</label>
            <input
              id="userLastName"
              formControlName="userLastName"
              type="text"
              placeholder="Doe"
            />
            <div class="alert" [hidden]="lastName.valid || lastName.untouched">
              <p>Last Name is required</p>
            </div>
          </div>

          <div class="form-item">
            <label for="userEmail">E-mail</label>
            <input
              id="userEmail"
              formControlName="userEmail"
              type="email"
              placeholder="johndoe@example.com"
            />
            <div class="alert" [hidden]="email.valid || email.untouched">
              <p *ngIf="email.errors?.['required']">E-mail is required</p>
              <p *ngIf="email.errors?.['email']">Please use a valid E-mail</p>
            </div>
          </div>
          <div class="form-item">
            <label for="userTelephone">Telephone</label>
            <input
              id="userTelephone"
              formControlName="userTelephone"
              type="tel"
              placeholder="11-2233-4455"
            />
          </div>
          <div class="form-item">
            <label for="userPassword">Password</label>
            <input
              id="userPassword"
              formControlName="userPassword"
              type="password"
              placeholder="Insert Password"
            />
            <div class="alert" [hidden]="password.valid || password.untouched">
              <p *ngIf="password.errors?.['required']">Password is required</p>
              <p
                *ngIf="password.errors?.['minlength'] || password.errors?.['maxlength']"
              >
                Password must be 6 to 10 characters long
              </p>
            </div>
          </div>
          <div class="form-item">
            <label for="passwordConfirmed">Confirm Password</label>
            <input
              id="passwordConfirmed"
              formControlName="userPasswordConfirmed"
              type="password"
              placeholder="Confirm Password"
            />
            <p
              id="passwordConfirmed__message"
              [hidden]="password.invalid || passwordConfirmed.untouched"
              [ngClass]="
                password.value === passwordConfirmed.value
                  ? 'all-good'
                  : 'alert'
              "
            >
              {{
                password.value === passwordConfirmed.value
                  ? 'Passwords match!'
                  : 'Passwords do not match!'
              }}
            </p>
          </div>
          <div class="form-item">
            <input
              type="submit"
              class="form-submit"
              [disabled]="userForm.invalid"
              value="Sign Up"
            />
          </div>
        </form>
        <footer class="signup-card__left-footer">
          <p class="left-footer__signin">
            I'm already a member!
            <span class="left-footer__signin-span"> Sign In </span>
          </p>
        </footer>
      </article>
      <article class="signup-card__right">
        <div class="right__grid-item">
          <img
            src="https://bolsa.frba.utn.edu.ar/recursos/nuevasImg/logo_utn.png"
            alt="UTN"
            class="utnba-logo"
          />
          <!-- https://www.cedol.org.ar/logistica/wp-content/uploads/2017/07/logo-utn-frba-1.png -->
        </div>
        <div class="right__grid-item"></div>
        <div class="right__grid-item">
          <strong class="strong-subtitle-1">MÓDULO 2 &#183; ANGULAR</strong>
          <strong class="strong-subtitle-2">TP Final</strong>
          <p>Pedro G. Bello</p>
        </div>
      </article>
    </section>
  `,
  styleUrl: './account.component.css',
})
export class AccountComponent {
  userForm = new FormGroup({
    userFirstName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userTelephone: new FormControl(''),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
    userPasswordConfirmed: new FormControl('', [
      Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(10),
    ]),
  });
  // getters:
  get firstName() {
    return this.userForm.get('userFirstName') as FormControl;
  }
  get lastName() {
    return this.userForm.get('userLastName') as FormControl;
  }
  get telephone() {
    return this.userForm.get('userTelephone') as FormControl;
  }
  get email() {
    return this.userForm.get('userEmail') as FormControl;
  }
  get password() {
    return this.userForm.get('userPassword') as FormControl;
  }
  get passwordConfirmed() {
    return this.userForm.get('userPasswordConfirmed') as FormControl;
  }

  handleSubmit() {
    if (this.userForm.invalid) return;
    const newUser = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      telephone: this.telephone.value,
      email: this.email.value,
      password: this.password.value,
      passwordConfirmed: this.passwordConfirmed.value,
    };
    // alert(JSON.stringify(newUser));
  }
  checkMatch() {
    if (this.password.value !== this.passwordConfirmed.value) {
      // get button and turn to disable.
    }
  }
}
