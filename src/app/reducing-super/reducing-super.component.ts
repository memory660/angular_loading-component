import { Component, OnInit } from '@angular/core';
import { FieldBaseComponent } from './field-base';

@Component({
  selector: 'app-reducing-super',
  templateUrl: './reducing-super.component.html',
  styleUrls: ['./reducing-super.component.scss']
})
export class ReducingSuperComponent extends FieldBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
