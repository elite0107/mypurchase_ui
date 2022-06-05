import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface MenuNode {
  icon?: string;
  name: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'My Procurement',
    children: [
      {
        name: 'Create MyPurchase',
        icon: 'bookmark_add'
      }
    ]
  },
  {
    name: 'Reports',
    icon: 'equalizer'
  },
  {
    name: 'Admin',
    icon: 'security'
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
