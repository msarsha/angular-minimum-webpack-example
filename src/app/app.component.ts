import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <div class="app">{{title}}</div>
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