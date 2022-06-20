import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-huh',
  template: `
    <h2>
      {{ title }} And the Array {{ description }} and the object will be
      {{ dataObj }} and the function will be {{ value }} and {{testingFunc()}} and also {{testingFunc2()}}
    </h2>
    <button (click)="toggleDisable()" [disabled]="isButtonDisabled">{{isButtonDisabled ? "Enable Me" : "Disable Me"}}</button>
    <button (click)="this.isButtonDisabled = false">⬅ Enable  Button</button>
    <div>
      <input type="text" placeholder="Enter something here.." [(ngModel)]="displayName">
      <h2>Your entered text is {{displayName}}</h2>
      <button (click)="changeDisName()">Click to Change</button>
    </div>
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
  displayName = "";
  title = 'angular-component huh';
  description = [1, 2, 3, 4, 5]; //this will be displayed in the string format in the browser if called through string interpolation eg: {{description}}
  dataObj = {
    title: 'angular-component huh',
    name: 'John',
    age: 30,
  }; //this will be displayed as [object Object] in the browser if called through string interpolation eg: {{dataObj}}

  changeDisName(){
    this.displayName = "Kyu chonk gaye na";
  }

  isButtonDisabled = false;

  toggleDisable() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  
  public get value() : string {
    return this.title;
  }

  testingFunc(){
    return this.title;
  }

  testingFunc2 = () => this.title;
  
  constructor() {}

  ngOnInit(): void {}
}
