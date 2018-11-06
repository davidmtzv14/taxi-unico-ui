import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  exports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule]
})
export class CoreModule {}
