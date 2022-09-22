import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducingSuperComponent } from './reducing-super.component';

describe('ReducingSuperComponent', () => {
  let component: ReducingSuperComponent;
  let fixture: ComponentFixture<ReducingSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducingSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducingSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
