import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@app/shared/services/form.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  form: FormGroup;
  @Output()
  submitEmitter: EventEmitter<{
    firstName: string;
      lastName: string;
      email: string;
      date: string;
      cellphone: string;
      username: string;
      password: string;
  }> = new EventEmitter();
  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      cellphone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  submit(): void {
    console.log(this.form.getRawValue());
    this.form.valid
      ? this.submitEmitter.emit(this.form.getRawValue())
      : this.formService.markFormGroupTouched(this.form);
  }
}
