import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  players = Array(1).fill(0);

  constructor() {}

  addPlayer() {
    this.players.push(0);
  }
}
