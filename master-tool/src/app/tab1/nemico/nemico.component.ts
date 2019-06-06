import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nemico',
  templateUrl: './nemico.component.html',
  styleUrls: ['./nemico.component.scss']
})
export class NemicoComponent implements OnInit {
  pf: number;
  death = false;
  cd = Array(5).fill(0);

  constructor() {}

  ngOnInit() {}

  dieEnemy() {
    if (this.pf === 0) {
      this.death = true;
    } else {
      this.death = false;
    }
  }

  lowerCD() {
    for (let i = 0; i < this.cd.length; i++) {
      this.cd[i] = this.cd[i] - 1;
      if (this.cd[i] <= 0) {
        this.cd[i] = 0;
      }
    }
  }
}
