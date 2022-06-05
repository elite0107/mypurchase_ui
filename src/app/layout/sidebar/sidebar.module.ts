import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
