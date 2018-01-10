import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPropertyComponent } from './input-output-property.component';

describe('InputOutputPropertyComponent', () => {
  let component: InputOutputPropertyComponent;
  let fixture: ComponentFixture<InputOutputPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
