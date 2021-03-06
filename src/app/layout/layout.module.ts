import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    HeaderModule,
    RouterModule,
    SidebarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
