import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <p>
      angular works!
    </p>
  `,
  styleUrl: './angular.component.css'
})
export class AngularComponent {

}
