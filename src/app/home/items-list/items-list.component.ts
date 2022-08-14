import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {


  @Input() itemName: string  = "Organization";

  itemList: any = [
    { name: "List 0001", status: true },
    { name: "List 0002", status: true },
    { name: "List 0003", status: true },
    { name: "List 0004", status: true },
    { name: "List 0005", status: true },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  buttonTapped(index:number) {
    this.itemList[index].status = !this.itemList[index].status;
    console.log(this.itemList);
  }

}
