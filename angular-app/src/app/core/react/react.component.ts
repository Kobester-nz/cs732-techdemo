import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [LayoutComponent],
  template: `
  <div class="body">
    <app-layout/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <div class="container">
      <div class="header">
        <h1 class="heading">What is React?</h1>
        <img src="assets/images/react.png" height="30%" width="30%"  alt="...">
        <p class="description">React is an open-source JavaScript library developed and maintained by Facebook and a community of developers. It is primarily used for building user interfaces (UIs) for web applications. React is known for its efficiency, flexibility, and declarative approach to building UIs.</p>
      </div>

      <! --   this is listing the key features of React -->
      <div class="features">
        <h2 class="sub-heading">Key Features of React:</h2>
        <ul class="feature-list">
          <li><strong>Component-based architecture:</strong> React promotes a component-based architecture, where UIs are built using reusable and composable components. Each component manages its own state and can be composed together to create complex UIs.          </li>
          <li><strong>Declarative Syntax:</strong> React uses a declarative syntax to describe how the UI should look based on the application state. Developers can focus on describing the desired UI state, and React takes care of updating the DOM to match that state.</li>
          <li><strong>Virtual DOM:</strong> React uses a virtual representation of the DOM to optimize the rendering process. Changes to the UI are first applied to the Virtual DOM, which is then compared to the actual DOM, and only the necessary updates are applied to the browser DOM.</li>
          <li><strong>JSX (JavaScript XML):</strong> JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to write and maintain UI components by combining HTML markup with JavaScript logic.          </li>
          <li><strong>One-Way Data Flow:</strong> React follows a unidirectional data flow, where data flows from parent to child components via props. This helps maintain predictable behavior and makes it easier to debug and reason about the application state.</li>
          <li><strong>React Hooks:</strong> React Hooks are a feature introduced in React 16.8 that allows functional components to use state and lifecycle features without writing a class. Hooks make it easier to reuse logic across components and manage state in functional components.          </li>
          <li><strong>React Router:</strong> React Router is a popular routing library for React applications. It enables developers to create dynamic, single-page applications with multiple views and navigation between different pages.</li>
        </ul>
        <br />
        <h2 class="sub-heading"> <strong> Before get started: </strong></h2>
        <h4> Knowledge check: </h4>
        <ul class="feature-list">
          <li><strong>Basic Web application experience:</strong> Have a basic undersanding of HTML, JavaScript/Typescript, CSS.</li>
          <li><strong>Have required packages/dependencies installed:</strong> NPM, node.js.</li>
          <li><strong>Tools:</strong> JavaScript/TypeScript, Command Line Interface (CLI).</li>
        </ul>
        <br/>
      </div>

      <! --   this is listing the Programmatic features of React -->
      <h4> React key programmatic features: </h4>
      <br/>
      <div class="list-group">
        <a href="https://react.dev/reference/react/hooks" class="list-group-item list-group-item-info list-group-item-action "> <strong>Hooks</strong>: Use different React features from your components.</a>
        <a href="https://react.dev/reference/react/components" class="list-group-item list-group-item-info list-group-item-action"><strong>Components</strong> - Documents built-in components that you can use in your JSX.</a>
        <a href="https://react.dev/reference/react/apis" class="list-group-item list-group-item-info list-group-item-action"><strong>APIs</strong> - APIs that are useful for defining components</a>
        <a href="https://react.dev/reference/react/directives" class="list-group-item list-group-item-info list-group-item-action"><strong>Directives</strong> - Provide instructions to bundlers compatible with React Server Components.
        </a>
      </div>  
      <br/>
      <h4> React DOM </h4>
      <br/>
      <div class="list-group">
        <a href="https://react.dev/reference/react-dom/hooks" class="list-group-item list-group-item-info list-group-item-action "> <strong>Hooks</strong>: Hooks for web applications which run in the browser DOM environment.</a>
        <a href="https://react.dev/reference/react-dom/components" class="list-group-item list-group-item-info list-group-item-action"><strong>Components</strong> - React supports all of the browser built-in HTML and SVG components.</a>
        <a href="https://react.dev/reference/react-dom" class="list-group-item list-group-item-info list-group-item-action"><strong>APIs</strong> - The react-dom package contains methods supported only in web applications</a>
        <a href="https://react.dev/reference/react-dom/client" class="list-group-item list-group-item-info list-group-item-action"><strong>Client APIs</strong> - The react-dom/client APIs let you render React components on the client (in the browser).</a>
        <a href="https://react.dev/reference/react-dom/server" class="list-group-item list-group-item-info list-group-item-action"><strong>Server APIs</strong> - The react-dom/server APIs let you render React components to HTML on the server.</a>
      </div>
      <br/>

      <! --   this is listing the differences between react and react-dom -->
      <h4> React VS. React Native </h4>
      <h5> React </h5>
      <p class="section-content">
        React, also known as React.js or ReactJS, is a JavaScript library for building user interfaces for web applications.
        It's primarily used for creating web applications that run in web browsers.
        React applications are built using components, which are reusable and composable UI elements.
        React uses JSX (JavaScript XML) for defining component structures and uses a virtual DOM for efficient rendering.
      </p>
      <h5> React Native </h5>
      <p class="section-content">
        React Native is a framework for building native mobile applications using JavaScript and React.
        It allows developers to build mobile apps for iOS, Android, and other platforms using the same React principles used for web development.
        React Native uses native components provided by the respective mobile platforms to render UI elements, resulting in a native look and feel.
        While React Native shares some concepts with React, such as components and JSX syntax, it also introduces platform-specific APIs and components for accessing device features like camera, geolocation, and push notifications.
      </p>
      <br/>
      <p> Happy hacking !!!</p>
    </div>
  <br/>
</div>
    `,
  styleUrl: './react.component.css'
})
export class ReactComponent{
}
