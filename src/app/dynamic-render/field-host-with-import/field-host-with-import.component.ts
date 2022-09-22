import { Component, OnInit, Type, Input } from '@angular/core';
import { Field1Component } from '../field1/field1.component';
import { Field2Component } from '../field2/field2.component';
import { Observable, from } from 'rxjs';


@Component({
  selector: 'app-field-host-with-import',
  templateUrl: './field-host-with-import.component.html',
  styleUrls: ['./field-host-with-import.component.scss']
})
export class FieldHostWithImportComponent implements OnInit {
  protected component$?: Observable<Type<Field1Component | Field2Component>>;

  @Input() set showField1(showField1: boolean) {
    this.component$ = (showField1)? this._loadField1(): this._loadField2();
  }

  constructor() { }

  ngOnInit(): void {
    this.component$ = this._loadField1();
  }

  _loadField1(): Observable<Type<Field1Component>> {
    return from(
      import('../field1/field1.component').then(m => m.Field1Component)
    )
  }

  _loadField2(): Observable<Type<Field2Component>> {
    return from(
      import('../field2/field2.component').then(m => m.Field2Component)
    )
  }
}
