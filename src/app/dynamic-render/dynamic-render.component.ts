import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-render',
  templateUrl: './dynamic-render.component.html',
  styleUrls: ['./dynamic-render.component.scss']
})
export class DynamicRenderComponent implements OnInit {
  showField1 = true;
  showImportField1 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
