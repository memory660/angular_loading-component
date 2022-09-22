import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldHostWithImportComponent } from './field-host-with-import.component';

describe('FieldHostWithImportComponent', () => {
  let component: FieldHostWithImportComponent;
  let fixture: ComponentFixture<FieldHostWithImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldHostWithImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldHostWithImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
