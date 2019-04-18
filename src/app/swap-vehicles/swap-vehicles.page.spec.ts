import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapVehiclesPage } from './swap-vehicles.page';

describe('SwapVehiclesPage', () => {
  let component: SwapVehiclesPage;
  let fixture: ComponentFixture<SwapVehiclesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapVehiclesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapVehiclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
