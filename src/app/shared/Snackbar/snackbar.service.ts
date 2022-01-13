import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) {}

  affirmativeSnackbar(message: string, action: string) {
    this._snackBar.open(message, action , {
      panelClass: ["snack-affirmative", "snackbar-alert"]
    });
  }
  warningSnackbar(message: string, action: string) {
    this._snackBar.open(message, action , {
      panelClass: ["snack-warning", "snackbar-alert"]
    });
  }
  errorSnackbar(message: string, action: string) {
    this._snackBar.open(message, action , {
      panelClass: ["snack-error", "snackbar-alert"]
    });
  }
}
