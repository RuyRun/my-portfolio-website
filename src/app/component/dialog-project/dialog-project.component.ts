import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  text: string;
  name: string;
  img: string;
  tools: string[];
  github?: string;
  site?:string
}

@Component({
  selector: 'app-dialog-project',
  templateUrl: './dialog-project.component.html',
  styleUrls: ['./dialog-project.component.scss']
})
export class DialogProjectComponent implements OnInit {
onNoClick() {
throw new Error('Method not implemented.');
}

  constructor(public dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit() {
    
  }

}
