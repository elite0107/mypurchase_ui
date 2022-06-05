import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePurchaseDialogComponent } from './create-purchase-dialog.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreatePurchaseDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CreatePurchaseDialogComponent
  ]
})
export class CreatePurchaseDialogModule { }
