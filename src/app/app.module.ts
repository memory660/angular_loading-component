import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { CompDialogComponent } from './dialog/comp-dialog/comp-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicRenderComponent } from './dynamic-render/dynamic-render.component';
import { FieldHostComponent } from './dynamic-render/field-host/field-host.component';
import { Field1Component } from './dynamic-render/field1/field1.component';
import { Field2Component } from './dynamic-render/field2/field2.component';
import { FieldHostWithImportComponent } from './dynamic-render/field-host-with-import/field-host-with-import.component';
import { AutoUnsubscribingComponent } from './auto-unsubscribing/auto-unsubscribing.component';
import { ReducingSuperComponent } from './reducing-super/reducing-super.component';
import { TextFieldComponent } from './text-field/text-field.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CompDialogComponent,
    DynamicRenderComponent,
    FieldHostComponent,
    Field1Component,
    Field2Component,
    FieldHostWithImportComponent,
    AutoUnsubscribingComponent,
    ReducingSuperComponent,
    TextFieldComponent,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
