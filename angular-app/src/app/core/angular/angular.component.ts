import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout/>
    <p>
      angular works!
    </p>
  `,
  styleUrl: './angular.component.css'
})
export class AngularComponent {

}
