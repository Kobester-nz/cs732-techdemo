import { Component } from '@angular/core';
// import bootstrap from '../../main.server';
import { LayoutComponent } from '../core/layout/layout.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent],
  template: `      
    <app-layout/>

    <div class="card" style="width: 30%;">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body" >
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
