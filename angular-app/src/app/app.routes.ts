import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
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
];
