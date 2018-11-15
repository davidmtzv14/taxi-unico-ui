import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTabContainerComponent } from './client-tab-container.component';

describe('ClientTabContainerComponent', () => {
  let component: ClientTabContainerComponent;
  let fixture: ComponentFixture<ClientTabContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTabContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
