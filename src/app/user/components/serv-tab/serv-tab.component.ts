import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@app/shared/services/form.service';

@Component({
  selector: 'app-serv-tab',
  templateUrl: './serv-tab.component.html',
  styleUrls: ['./serv-tab.component.scss']
})
export class ServTabComponent implements OnInit {
  form: FormGroup;
  @Output()
  submitEmitter: EventEmitter<{
    username: string;
    password: string;
  }> = new EventEmitter();

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  submit(): void {
    this.form.valid
      ? this.submitEmitter.emit(this.form.getRawValue())
      : this.formService.markFormGroupTouched(this.form);
  }

}
