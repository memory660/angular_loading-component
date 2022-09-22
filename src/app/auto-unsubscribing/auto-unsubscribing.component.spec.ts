import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUnsubscribingComponent } from './auto-unsubscribing.component';

describe('AutoUnsubscribingComponent', () => {
  let component: AutoUnsubscribingComponent;
  let fixture: ComponentFixture<AutoUnsubscribingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoUnsubscribingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoUnsubscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
