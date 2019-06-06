import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NemicoComponent } from './nemico.component';

describe('NemicoComponent', () => {
  let component: NemicoComponent;
  let fixture: ComponentFixture<NemicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NemicoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NemicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
