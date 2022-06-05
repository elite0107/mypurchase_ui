import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CreatePurchaseDialogModule } from './create-purchase-dialog/create-purchase-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    CreatePurchaseDialogModule
  ],
})
export class ProcurementModalModule { }
