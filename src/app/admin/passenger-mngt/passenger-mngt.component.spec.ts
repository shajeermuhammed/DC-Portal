import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerMngtComponent } from './passenger-mngt.component';

describe('PassengerMngtComponent', () => {
  let component: PassengerMngtComponent;
  let fixture: ComponentFixture<PassengerMngtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerMngtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerMngtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
