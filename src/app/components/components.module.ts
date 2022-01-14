import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ChipComponent } from './chip/chip.component';

const uiComponents = [
  ButtonComponent,
  ChipComponent,
];

@NgModule({
  declarations: uiComponents,
  imports: [
    CommonModule
  ],
  exports: uiComponents
})
export class ComponentsModule { }
