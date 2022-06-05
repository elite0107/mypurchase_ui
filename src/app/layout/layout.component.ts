import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  opened: boolean = true;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.sidebarOpen.subscribe(() => {
      this.drawer.toggle();
    })
  }

}
