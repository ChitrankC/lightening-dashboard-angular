import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  buildingAState = 'Powered On';
  buildingBState = 'Powered Off';

  constructor() { }

  ngOnInit(): void {
  }

  onPowerStateChanged(building: string, newState: string) {
    if (building === 'buildingA') {
      this.buildingAState = newState;
    } else if (building === 'buildingB') {
      this.buildingBState = newState;
    }
  }
}