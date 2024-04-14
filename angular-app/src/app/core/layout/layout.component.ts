import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  template: `
  <! --  this app-layout will be used in all pages for the header -->
  <html>
    <div class="navbar-layout">
      <div><a class="navbar-a" href="/home" ><b>Home</b></a></div>
      <div><a class="navbar-a" href="/react"><b>React</b></a></div>
      <div><a class="navbar-a" href="/angular"><b>Angular</b></a></div>
      <div><a class="navbar-a" href="/comparsion"><b>Comparsion</b></a></div>
    </div>
  </html>  `,
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
