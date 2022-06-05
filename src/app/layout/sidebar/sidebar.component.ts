import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { CreatePurchaseDialogComponent } from 'src/app/components/procurement/modals/create-purchase-dialog/create-purchase-dialog.component';

interface MenuNode {
  icon?: string;
  name: string;
  children?: MenuNode[];
  onClick: () => void;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private dialog: MatDialog) {
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit(): void { }

  TREE_DATA: MenuNode[] = [
    {
      name: 'My Procurement',
      children: [
        {
          name: 'Create MyPurchase',
          icon: 'bookmark_add',
          onClick: () => { this.onCreateMyPurchase(); }
        }
      ],
      onClick: () => { }
    },
    {
      name: 'Reports',
      icon: 'equalizer',
      onClick: () => { console.log("Reports"); }
    },
    {
      name: 'Admin',
      icon: 'security',
      onClick: () => { console.log("Admin"); }
    }
  ];

  onCreateMyPurchase() {
    this.dialog.open(CreatePurchaseDialogComponent);
  }

  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  menuClick(clickFunc: () => void) {
    clickFunc();
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
}
