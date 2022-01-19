import { Component, Input } from '@angular/core';

@Component({
  selector: 'gpc-button, gpc-button[outline]',
  template: `
   <button class="btn btn-{{size}} {{type}}">
     <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type: 'primary' | 'secondary' | 'success' = 'primary';

  @Input() size: 'sm' | 'lg' = 'lg';

  constructor() { }

}
