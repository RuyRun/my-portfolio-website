import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogImprintComponent } from '../dialog-imprint/dialog-imprint.component';
import { DialogDataProtecComponent } from '../dialog-dataProtec/dialog-dataProtec.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openImprint() {
    console.log('open Diaog');
    this.dialog.open(DialogImprintComponent, {
      autoFocus: false
    })
  }
  openDataProtection() {
    console.log('open Diaog');
    this.dialog.open(DialogDataProtecComponent, {
      autoFocus: false
    })

  }
}
