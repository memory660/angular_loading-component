import { Component, OnInit, Type, Input } from '@angular/core';
import { Field1Component } from '../field1/field1.component';
import { Field2Component } from '../field2/field2.component';

@Component({
  selector: 'app-field-host',
  templateUrl: './field-host.component.html',
  styleUrls: ['./field-host.component.scss']
})
export class FieldHostComponent implements OnInit {
  protected component: Type<Field1Component | Field2Component> = Field1Component;

  @Input() set showField1(showField1: boolean) {
    this.component = (showField1)? Field1Component: Field2Component;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
