import { Component } from '@angular/core';
// import bootstrap from '../../main.server';
import { LayoutComponent } from '../core/layout/layout.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent],
  template: ` 
  <div class="body">
  <! --  import app-layout for the header -->
    <app-layout/>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-90" style="margin-left: 40%; margin-top:20%;">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
          <img src="assets/images/react.png" class="card-img-top" height="90%" width="90%" alt="React">
          <div class="card-body" >
            <h5 class="card-title">React</h5>
            <p class="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
            <a href="/react" class="btn btn-primary">Get Started!</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-80" style="margin-top: 20%; ">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
          <img src="assets/images/reactvsangular.jpeg" class="card-img-top" height="100%" width="100%" alt="RvsA">
          <div class="card-body" >
          <br/>
            <h3 class="card-title">React VS. Angular</h3>
            <p class="card-text">React is a JavaScript library, whereas Angular is a TypeScript-based JavaScript framework. React uses one-way data binding and virtual DOM trees, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size.</p>
            <br/>
            <br/>
            <br/>
            <a href="/comparsion" class="btn btn-primary">Let's compare</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-80" style="margin-right: 40%; margin-top:20%; ">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
          <img src="assets/images/angular.png" class="card-img-top" height="100%" width="100%" alt="Angular">
          <div class="card-body" >
            <h5 class="card-title">Angular</h5>
            <p class="card-text">Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
            <a href="/angular" class="btn btn-primary">Get Started!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
