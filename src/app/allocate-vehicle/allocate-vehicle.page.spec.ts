import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateVehiclePage } from './allocate-vehicle.page';

describe('AllocateVehiclePage', () => {
  let component: AllocateVehiclePage;
  let fixture: ComponentFixture<AllocateVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateVehiclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
