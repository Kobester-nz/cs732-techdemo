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
      <! --  this is listing the key features of Angular -->
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
        
        <! --  This list where to starat in Angular -->
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
        <br/>
        <h2 class="sub-heading"> <strong> Angular Templates: </strong></h2>
        <h5> In Angular, a template is a blueprint for a fragment of a user interface (UI). Templates are written in HTML, and special syntax can be used within a template to build on many of Angular's features.        </h5>
        <br/>

        <! --   This list where the Syntax starts: -->
        <h4> Tempate Syntax: </h4>
        <p> #Feel free to click on below links for more information on Angular official website</p>
        <div class="list-group">
          <a href="https://angular.io/guide/interpolation" class="list-group-item list-group-item-info list-group-item-action ">Interpolation</a>
          <a href="https://angular.io/guide/property-binding" class="list-group-item list-group-item-info list-group-item-action">Property binding</a>
          <a href="https://angular.io/guide/attribute-binding" class="list-group-item list-group-item-info list-group-item-action">Attribute binding</a>
          <a href="https://angular.io/guide/class-binding" class="list-group-item list-group-item-info list-group-item-action">Class and style binding</a>
          <a href="https://angular.io/guide/event-binding" class="list-group-item list-group-item-info list-group-item-action">Event binding</a>
          <a href="https://angular.io/guide/template-reference-variables" class="list-group-item list-group-item-info list-group-item-action">Template reference variables</a>
          <a href="https://angular.io/guide/built-in-directives" class="list-group-item list-group-item-info list-group-item-action">Built-in directives</a>
          <a href="https://angular.io/guide/inputs-outputs" class="list-group-item list-group-item-info list-group-item-action">Inputs and Outputs</a>
        </div>
        <br/>
        <h2 class="sub-heading"> <strong> Angular Dependency Injection: </strong></h2>
        <p>When you develop a smaller part of your system, like a module or a class, you may need to use features from other classes. For example, you may need an HTTP service to make backend calls. Dependency Injection, or DI, is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them. Angular supports this design pattern and you can use it in your applications to increase flexibility and modularity. </p>
        <p>In Angular, dependencies are typically services, but they also can be values, such as strings or functions. An injector for an application (created automatically during bootstrap) instantiates dependencies when needed, using a configured provider of the service or value. </p>
        <br/>
        <h4> Dependency injection: </h4>
        <br/>

        <div class="list-group">
          <a href="https://angular.io/guide/dependency-injection" class="list-group-item list-group-item-info list-group-item-action ">Understand Dependency Injection</a>
          <a href="https://angular.io/guide/creating-injectable-service" class="list-group-item list-group-item-info list-group-item-action">Creating and injecting service</a>
          <a href="https://angular.io/guide/dependency-injection-providers" class="list-group-item list-group-item-info list-group-item-action">Configuring dependency providers</a>
          <a href="https://angular.io/guide/dependency-injection-context" class="list-group-item list-group-item-info list-group-item-action">Injection context</a>
        </div>
      <br/>
      <br/>
      <h2 class="sub-heading"> <strong> Directives: </strong></h2>
      <p>When you develop a smaller part of your system, like a module or a class, you may need to use features from other classes. For example, you may need an HTTP service to make backend calls. Dependency Injection, or DI, is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them. Angular supports this design pattern and you can use it in your applications to increase flexibility and modularity. </p>
      <p>In Angular, dependencies are typically services, but they also can be values, such as strings or functions. An injector for an application (created automatically during bootstrap) instantiates dependencies when needed, using a configured provider of the service or value. </p>
      <br/>
      <br/>
      <p> Happy hacking !!!</p>
      </div>
    </div>
    <br/>
  </div>

  `,
  styleUrl: './angular.component.css'
})


export class AngularComponent {

}
