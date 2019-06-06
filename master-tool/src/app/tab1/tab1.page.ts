import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  enemys = Array(1).fill(0);
  damage: number;
  healing: number;

  constructor() {}

  addEnemy() {
    this.enemys.push(0);
  }
}
