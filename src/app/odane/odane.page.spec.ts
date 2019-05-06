import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdanePage } from './odane.page';

describe('OdanePage', () => {
  let component: OdanePage;
  let fixture: ComponentFixture<OdanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdanePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
