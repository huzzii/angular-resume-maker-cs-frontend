import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div
      class="overlay"
      fxLayout="column"
      fxLayoutAlign="center center"
      fxLayoutGap="40px"
    >
      <img src="../assets/digiresume-green.png" width="20%" alt="" />
      <mat-card fxLayout="column">
        <h2>Login</h2>
        <form (ngSubmit)="this.loginForm.valid && login()" [formGroup]="this.loginForm" action="" fxLayout="column">
          <mat-form-field>
            <input
              formControlName="email"
              type="email"
              placeholder="Email"
              matInput
            />
            <mat-error>Email is required</mat-error>
          </mat-form-field>
          <mat-form-field>
            <input
              formControlName="password"
              type="password"
              placeholder="Password"
              matInput
            />
            <mat-error>(8-12 Digit) Password is required</mat-error>
          </mat-form-field>
          <a style="margin-top:2rem" href="">Forgot Password</a>
          <div
            style="margin-top:2rem"
            fxLayout="row"
            fxLayoutGap="15px"
            fxLayoutAlign="end"
          >
            <button type="submit" color="primary" mat-raised-button>Login</button>
            <button color="accent" mat-raised-button>Signup</button>
          </div>
        </form>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .overlay {
        width: 100%;
        height: 100%;
      }
      mat-card {
        width: 25rem;
        height: 20rem;
      }
      button {
        color: #fff !important;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    `,
  ],
})
export class AppComponent {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(8),
      ]),
    });
  }

  login() {
    console.log(this.loginForm.value);
  }
}
