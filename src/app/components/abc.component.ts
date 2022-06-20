import { Component } from "@angular/core";

@Component({
    selector: "app-abc",
    template: `
    <h2>{{title}}</h2>
    `,
    styles: [`
    h2{
        color: blue
    }`]
})

export class AbcComponent {
  title = "angular-component abc";
}