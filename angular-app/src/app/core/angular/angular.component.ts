import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [LayoutComponent],
  template: `
  <div class="body">

    <app-layout/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    

    <div class="container" >
      <div class="header">
        <h1 class="heading">What is Angular?</h1>
        <img src="assets/images/angular.png" height="30%" width="30%"  alt="...">
        <p class="description">Angular is a popular open-source web application framework maintained by Google and a community of developers. It's used to build single-page client-side web applications, where the entire page doesn't reload during use. Instead, Angular dynamically updates the page as the user interacts with it.</p>
      </div>
      
      <div class="features">
        <h2 class="sub-heading"> <strong>Key Features of Angular: </strong></h2>
        <ul class="feature-list">
          <li><strong>Component-based architecture:</strong> Angular applications are built using reusable components.</li>
          <li><strong>Templates:</strong> Angular uses HTML templates with additional Angular-specific syntax.</li>
          <li><strong>Directives:</strong> Special markers on a DOM element that tell Angular to do something with that element.</li>
          <li><strong>Dependency Injection:</strong> Angular has a built-in dependency injection system.</li>
          <li><strong>Services:</strong> Reusable components that provide functionality shared across the application.</li>
          <li><strong>Routing:</strong> Angular provides a router for building single-page applications with multiple views.</li>
          <li><strong>HTTP Client:</strong> Angular includes a built-in HTTP client for making requests to servers.</li>
          <li><strong>Forms:</strong> Angular provides features for building and validating forms.</li>
        </ul>
        <br />
        <h2 class="sub-heading"> <strong> Before get started: </strong></h2>
        <h4> Knowledge check: </h4>
        <ul class="feature-list">
          <li><strong>Basic Web application experience:</strong> Have a basic undersanding of HTML, JavaScript/Typescript, CSS.</li>
          <li><strong>Have required packages/dependencies installed:</strong> NPM, node.js.</li>
          <li><strong>Tools:</strong> Typescript (Shipped by default), Command Line Interface (CLI).</li>
        </ul>
        <br/>
        <h2 class="sub-heading"> <strong> Angular Components: </strong></h2>
        <h4> Component typically consists of: </h4>
        <ul class="feature-list">
          <li>An HTML template that declares what renders on the page. </li>
          <li>A TypeScript class that defines behavior. </li>
          <li>CSS selector that defines how the component is used in a template. </li>
        </ul>
        <br/>
        <h4> Create a component: </h4>
        <p>1. From a terminal window, navigate to the directory containing your application. </p>
        <p>2. Run the <strong>'ng generate component component-name'</strong> command, where <strong>component-name</strong> is the name of your new component </p>
        <p>3. Check the directory and by default there should be 4 new files created in a folder under <strong>component-name</strong> name. </p>

      </div>

    
    </div>
    <br/>
  </div>

  `,
  styleUrl: './angular.component.css'
})


export class AngularComponent {

}
