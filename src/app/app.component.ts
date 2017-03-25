import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app">{{title}}</h1>
  `,
  styles: [
    `.app{
      background-color: #f4f4f4;
    }
    `
  ]
})
export class AppComponent {
  title: String = "App Works !";
}