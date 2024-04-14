import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-comparsion',
  standalone: true,
  imports: [LayoutComponent],
  template: `
  <div class="body">

    <app-layout/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <div class="container">
    <br/>
      <div class="header">
        <h1 class="heading">React vs Angular</h1>
        <img src="assets/images/reactvsangular-1.png" height="100%" width="100%"  alt="...">
      </div>

      <! --   This list the Differences and Common Areas -->
      <h2>Differences and Common Areas:</h2>
      <div class="content">
        <section class="section">
          <h2 class="section-heading">Differences</h2>
          <ul class="list">
            <li><strong>Language and Syntax:</strong> React uses JSX while Angular uses TypeScript.</li>
            <li><strong>Architecture:</strong> React follows a component-based architecture, Angular follows MVC or MVVM pattern.</li>
            <li><strong>Rendering:</strong> React uses virtual DOM, Angular uses two-way data binding.</li>
            <li><strong>Learning Curve:</strong> React has a lower learning curve compared to Angular.</li>
            <li><strong>State Management:</strong> React relies on libraries like Redux for state management, while Angular has built-in features like services and observables.</li>
            <li><strong>Directives:</strong> Angular uses directives extensively for manipulating the DOM, while React focuses on components and props.</li>
          </ul>
        </section>
        <section class="section">
          <h2 class="section-heading">Common Areas</h2>
          <ul class="list">
            <li><strong>Component-Based Architecture:</strong> Both React and Angular are based on component-based architecture.</li>
            <li><strong>Community Support:</strong> Both have large and active communities providing extensive support.</li>
            <li><strong>Tooling and Ecosystem:</strong> Both offer a rich ecosystem of tools and libraries.</li>
            <li><strong>Performance:</strong> Both strive to provide optimal performance for web applications.</li>
            <li><strong>Testing:</strong> Both frameworks support unit testing and end-to-end testing.</li>
            <li><strong>Mobile Development:</strong> React Native is commonly used for mobile development with React, while Angular offers Ionic framework for mobile development.</li>
          </ul>
        </section>
      </div>
    </div>

    <! --   This list the Scenarios for different use cases for react and angular -->
    <div class="container">
      <div class="header">
        <h1 class="heading">Scenarios: When to Use React and When to Use Angular</h1>
      </div>
      <div class="content">
        <section class="section">
          <h2 class="section-heading">React</h2>
          <ul class="list">
            <li><strong>Small to Medium-Sized Applications:</strong> React is lightweight and flexible, making it suitable for smaller to medium-sized applications.</li>
            <li><strong>Single-Page Applications (SPAs):</strong> React's efficient rendering and component-based architecture are ideal for SPAs with frequent user interactions.</li>
            <li><strong>Projects Requiring High Performance:</strong> React's virtual DOM and one-way data flow contribute to its performance, making it suitable for high-performance applications.</li>
            <li><strong>Projects with a Strong UI Focus:</strong> React's focus on building reusable UI components makes it a great choice for projects with a strong UI focus.</li>
            <li><strong>Mobile Development:</strong> React Native, based on React, is popular for building cross-platform mobile applications.</li>
          </ul>
        </section>
        <section class="section">
          <h2 class="section-heading">Angular</h2>
          <ul class="list">
            <li><strong>Large-Scale Enterprise Applications:</strong> Angular's comprehensive feature set and opinionated structure make it suitable for large-scale enterprise applications.</li>
            <li><strong>Full-Featured Applications:</strong> Angular provides built-in features for routing, form handling, HTTP client, and state management, making it suitable for full-featured applications.</li>
            <li><strong>Projects with Complex UI Requirements:</strong> Angular's powerful templating system and extensive set of built-in directives make it suitable for projects with complex UI requirements.</li>
            <li><strong>Enterprise-Level Support and Long-Term Maintenance:</strong> Angular's official support from Google and built-in dependency injection make it suitable for projects requiring long-term maintenance and support.</li>
            <li><strong>Projects with Strict Coding Standards:</strong> Angular enforces strict coding standards and structure, making it suitable for projects with strict coding requirements and large teams.</li>
          </ul>
        </section>
      </div>
    </div>
  <br/>
</div>
    `,
  styleUrl: './comparsion.component.css'
})
export class ComparsionComponent {

}
