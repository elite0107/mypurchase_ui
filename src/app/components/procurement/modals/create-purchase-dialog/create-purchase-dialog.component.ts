import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-purchase-dialog',
  templateUrl: './create-purchase-dialog.component.html',
  styleUrls: ['./create-purchase-dialog.component.scss']
})
export class CreatePurchaseDialogComponent implements OnInit {
  labelPosition = 0;
  constructor(public dialogRef: MatDialogRef<CreatePurchaseDialogComponent>) { }

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

}
