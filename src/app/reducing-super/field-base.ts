import { inject } from '@angular/core';
import {Service1Service} from './service1.service';
import { Service2Service } from './service2.service';

export class FieldBaseComponent {
  protected service1 = inject(Service1Service);
  protected service2 = inject(Service2Service);
}
