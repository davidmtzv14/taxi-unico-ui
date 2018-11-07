import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFormContainerComponent } from './signin-form-container.component';

describe('SigninFormContainerComponent', () => {
  let component: SigninFormContainerComponent;
  let fixture: ComponentFixture<SigninFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
