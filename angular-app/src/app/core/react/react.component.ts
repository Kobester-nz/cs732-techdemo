import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <app-layout/>
    <p>
      react works!
    </p>
  `,
  styleUrl: './react.component.css'
})
export class ReactComponent{
}
