import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-abc></app-abc>
  <app-huh></app-huh>
    `,
  styles: [`
  h1{
    color: red;
  }
  `]
})
export class AppComponent {
  title = 'angular-course';
}
