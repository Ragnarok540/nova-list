import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChangeModalComponent } from './state-change-modal.component';

describe('StateChangeModalComponent', () => {
  let component: StateChangeModalComponent;
  let fixture: ComponentFixture<StateChangeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateChangeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
