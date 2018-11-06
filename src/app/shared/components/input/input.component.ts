import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from '@app/shared/classes/my-error-state-matcher';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  placeholder: string;
  @Input()
  error: string;
  @Input()
  control: FormControl;
  @Input()
  autocomplete: string;
  @Input()
  type = 'text';
  matcher: MyErrorStateMatcher;

  constructor() {
    this.matcher = new MyErrorStateMatcher();
  }

  ngOnInit() {}
}
