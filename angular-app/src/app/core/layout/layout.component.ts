import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  template: `
  <html>
    <div class="navbar">
      <div><a href="/home" ><b>Home</b></a></div>
      <div><a href="/react"><b>React</b></a></div>
      <div><a href="/angular"><b>Angular</b></a></div>
      <div><a href="/comparsion"><b>Comparsion</b></a></div>
    </div>
  </html>  `,
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
