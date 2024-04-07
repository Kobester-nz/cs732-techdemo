import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularComponent } from './core/angular/angular.component';
import { ComparsionComponent } from './core/comparsion/comparsion.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ReactComponent } from './core/react/react.component';
import { HomeComponent } from './home/home.component';

// const routeConfig: Routes = [
//     {
//       path: '',
//       component: HomeComponent,
//       title: 'Home page'
//     },
  
// ]
// export default routeConfig;
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => AppComponent,
        title: 'Home page'
    },
    {
        path: 'home',
        loadComponent: () => HomeComponent,
        title: 'Home page'
    },
    {
        path: 'layout',
        loadComponent: () => LayoutComponent,
        title: 'Home page'
    },
    {
        path: 'react',
        loadComponent: () => ReactComponent,
        title: 'React page'
    },
    {
        path: 'angular',
        loadComponent: () => AngularComponent,
        title: 'Angular page'
    },
    {
        path: 'comparsion',
        loadComponent: () => ComparsionComponent,
        title: 'Angular vs React page'
    },
];
