import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nemico',
  templateUrl: './nemico.component.html',
  styleUrls: ['./nemico.component.scss']
})
export class NemicoComponent implements OnInit {
  pf: number;
  rid: number;
  dur: number;
  death = false;
  cd = Array(5).fill(0);
  @Input() damage: number;
  @Input() healing: number;

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
      if (this.cd[i] < 0) {
        this.cd[i] = 0;
      }
    }
  }

  dealDamage() {
    this.pf = this.pf - this.calculateDamage(this.damage);
    if (this.pf < 0) {
      this.pf = 0;
    }
  }

  heal() {
    this.pf = this.pf + this.healing;
  }

  private calculateDamage(damage: number) {
    let reductedDamage = damage;
    if (this.dur > 0) {
      reductedDamage = damage - this.rid;
      if (damage >= this.rid) {
        this.dur = this.dur - 1;
        if (this.dur < 0) {
          this.dur = 0;
        }
      }
      if (reductedDamage < 0) {
        reductedDamage = 0;
      }
    }
    console.log(reductedDamage + ' rid: ' + this.rid + 'dur:  ' + this.dur);
    return reductedDamage;
  }
}
