import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SnackbarService} from "../shared/Snackbar/snackbar.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _snackbar : SnackbarService) { }

  ngOnInit(): void {
  }

    onSubmit(f: NgForm) {
      this._snackbar.affirmativeSnackbar("Support ticker submitted", "")
      f.reset();
  }
}
