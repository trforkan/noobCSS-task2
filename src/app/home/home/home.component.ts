import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tabItems: string[] = [
    "Organization",
    "Phase",
    "Descipline",
    "Recurring Report Preset"
  ];

  selectedTab="Organization";

  constructor() { }

  ngOnInit(): void {
  }

  display(event: MatTabChangeEvent) {
    // console.log(event.tab.textLabel);
    this.selectedTab = event.tab.textLabel;
  }

}
