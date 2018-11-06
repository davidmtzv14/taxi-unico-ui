import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  markFormGroupTouched(formGroup: FormGroup): void {
    if (formGroup.controls) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        if (control['controls']) {
          if (control['controls'].constructor === Array) {
            control['controls'].forEach(c => this.markFormGroupTouched(c));
          } else {
            Object.keys(control['controls']).forEach(field => {
              const formControl = control.get(field);
              this.markFormGroupTouched(<FormGroup>formControl);
            });
          }
        }
      });
    } else {
      formGroup.markAsTouched();
    }
  }
}
