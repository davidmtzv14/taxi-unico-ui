import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTabContainerComponent } from './details-tab-container.component';

describe('DetailsTabContainerComponent', () => {
  let component: DetailsTabContainerComponent;
  let fixture: ComponentFixture<DetailsTabContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTabContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
