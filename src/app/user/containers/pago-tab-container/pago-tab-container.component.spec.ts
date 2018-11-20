import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiTabContainerComponent } from './taxi-tab-container.component';

describe('TaxiTabContainerComponent', () => {
  let component: TaxiTabContainerComponent;
  let fixture: ComponentFixture<TaxiTabContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiTabContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
