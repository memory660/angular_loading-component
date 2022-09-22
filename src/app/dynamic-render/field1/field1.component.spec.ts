import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Field1Component } from './field1.component';

describe('Field1Component', () => {
  let component: Field1Component;
  let fixture: ComponentFixture<Field1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Field1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Field1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
