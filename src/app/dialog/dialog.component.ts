import { Component, OnInit, Type } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { exhaustMap, from } from 'rxjs';
import { CompDialogComponent } from './comp-dialog/comp-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  opendialog() {
/*
- Nous utilisons la fonction from pour transformer une Promise en Observable.
- Nous utilisons la simple fonction d'importation JavaScript. Il n'y a rien de fantaisiste ni aucune autre fonction d'importation. Juste la fonction d'importation JavaScript.
- L'Observable résultant n'émettra qu'une seule fois (il n'est donc pas nécessaire de stocker et de gérer l'abonnement) et il émettra un Type<HelloWorldComponent>, où Type<T> provient de @angular/core.
*/
    from(
      import('./comp-dialog/comp-dialog.component').then(
        m => m.CompDialogComponent
      )
    ).pipe(
      exhaustMap((component: Type<CompDialogComponent>) => this._dialog.open(component).afterClosed())
    ).subscribe();
  }
}
