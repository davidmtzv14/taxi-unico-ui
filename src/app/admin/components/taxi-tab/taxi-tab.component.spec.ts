import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiTabComponent } from './taxi-tab.component';

describe('TaxiTabComponent', () => {
  let component: TaxiTabComponent;
  let fixture: ComponentFixture<TaxiTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
