import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindComponent } from './event-bind.component';

describe('EventBindComponent', () => {
  let component: EventBindComponent;
  let fixture: ComponentFixture<EventBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
