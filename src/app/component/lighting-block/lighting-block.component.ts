import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lighting-block',
  templateUrl: './lighting-block.component.html',
  styleUrls: ['./lighting-block.component.css']
})
export class LightingBlockComponent implements OnInit {
  @Input() building: string = '';
  @Input() location: string = '';
  @Input() lightsOn: number = 0;
  @Input() totalLights: number = 0;
  @Input() schedule: string = '';
  @Input() powerState: string = '';
  @Input() viewLights: string = '';  // Added input for the link

  @Output() powerStateChanged = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  togglePower() {
    this.powerState = this.powerState === 'Powered On' ? 'Powered Off' : 'Powered On';
    this.powerStateChanged.emit(this.powerState);
  }

  goToLights() {
    this.router.navigate(['/loading']).then(() => {
      setTimeout(() => {
        this.router.navigate([this.viewLights]);
      }, 1000); // Simulate loading for 1 second
    });
  }
}