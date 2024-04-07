import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-comparsion',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <p>
      comparsion works!
    </p>
    `,
  styleUrl: './comparsion.component.css'
})
export class ComparsionComponent {

}
