import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@app/core/core.module';

import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule],
  exports: [InputComponent]
})
export class SharedModule {}
