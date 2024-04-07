import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-comparsion',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout/>
    <p>
      comparsion works!
    </p>
    `,
  styleUrl: './comparsion.component.css'
})
export class ComparsionComponent {

}
