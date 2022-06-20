import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-huh',
  template: `
    <h2>
      {{ title }} And the Array {{ description }} and the object will be
      {{ dataObj }} and the function will be {{ value }} and
      {{ testingFunc() }} and also {{ testingFunc2() }}
    </h2>
    <button (click)="toggleDisable()" [disabled]="isButtonDisabled">
      {{ isButtonDisabled ? 'Enable Me' : 'Disable Me' }}
    </button>
    <button (click)="this.isButtonDisabled = false">⬅ Enable Button</button>
    <div>
      <input
        type="text"
        placeholder="Enter something here.."
        [(ngModel)]="displayName"
      />
      <h2>Your entered text is {{ displayName }}</h2>
      <button mat-raised-button color="warn" (click)="changeDisName()">
        Click to Change
      </button>
    </div>
    <mat-toolbar>
      <button mat-button color="primary">click me</button>
      <button mat-raised-button color="warn">click me</button>
    </mat-toolbar>
    <div class="" style="width:30vw; background:#b04bd8; margin:15px">
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>City</mat-label>
        <input matInput placeholder="Ex. San Francisco" />
      </mat-form-field>
      <mat-form-field class="example-form-field" appearance="fill">
        <mat-label>Clearable input</mat-label>
        <input matInput type="text" />
        <button *ngIf="value" matSuffix mat-icon-button aria-label="Clear">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>
    <div class="" style="width:60vw; background:#b04bd8; margin:15px">
      <form class="example-form">
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Company (disabled)</mat-label>
          <input matInput disabled value="Google" />
        </mat-form-field>

        <table class="example-full-width" cellspacing="0">
          <tr>
            <td>
              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>First name</mat-label>
                <input matInput />
              </mat-form-field>
            </td>
            <td>
              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Long Last Name That Will Be Truncated</mat-label>
                <input matInput />
              </mat-form-field>
            </td>
          </tr>
        </table>

        <p>
          <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Address</mat-label>
            <textarea matInput placeholder="Ex. 100 Main St">
1600 Amphitheatre Pkwy</textarea
            >
          </mat-form-field>
          <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Address 2</mat-label>
            <textarea matInput></textarea>
          </mat-form-field>
        </p>

        <table class="example-full-width" cellspacing="0">
          <tr>
            <td>
              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>City</mat-label>
                <input matInput placeholder="Ex. San Francisco" />
              </mat-form-field>
            </td>
            <td>
              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>State</mat-label>
                <input matInput placeholder="Ex. California" />
              </mat-form-field>
            </td>
            <td>
              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Postal Code</mat-label>
                <input
                  matInput
                  #postalCode
                  maxlength="5"
                  placeholder="Ex. 94105"
                  value="94043"
                />
                <mat-hint align="end"
                  >{{ postalCode.value.length }} / 5</mat-hint
                >
              </mat-form-field>
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div class="">
      <mat-card class="example-card" style="width:50%; margin: 12px">
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-content>
          <p>This card has divider and indeterminate progress as footer</p>
          <p>{{ longText }}</p>
        </mat-card-content>
        <mat-divider inset></mat-divider>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
        <mat-card-footer>
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </mat-card-footer>
      </mat-card>
    </div>
    <mat-card fxLayout="row" fxLayoutAlign="start end" fxLayoutGap="20">
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>City</mat-label>
        <input matInput placeholder="Ex. San Francisco" />
      </mat-form-field>
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>City</mat-label>
        <input matInput placeholder="Ex. San Francisco" />
      </mat-form-field>
    </mat-card>
    <mat-card>
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>City</mat-label>
        <input matInput placeholder="Ex. San Francisco" />
      </mat-form-field>
    </mat-card>
  `,
  styles: [
    `
      h2 {
        font-weight: normal;
        font-size: 1.2em;
      }
    `,
  ],
})
export class HuhComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  displayName = '';
  title = 'angular-component huh';
  description = [1, 2, 3, 4, 5]; //this will be displayed in the string format in the browser if called through string interpolation eg: {{description}}
  dataObj = {
    title: 'angular-component huh',
    name: 'John',
    age: 30,
  }; //this will be displayed as [object Object] in the browser if called through string interpolation eg: {{dataObj}}

  changeDisName() {
    this.displayName = 'Kyu chonk gaye na';
  }

  isButtonDisabled = false;

  toggleDisable() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  public get value(): string {
    return this.title;
  }

  testingFunc() {
    return this.title;
  }

  testingFunc2 = () => this.title;

  constructor() {}

  ngOnInit(): void {}
}
