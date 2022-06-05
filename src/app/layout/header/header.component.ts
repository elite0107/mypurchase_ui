import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value = '';

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void { }

  onSidebarToggle() {
    this.sidebarService.sidebarOpen.next(true);
  }
}
