import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SspotRPage } from './sspot-r.page';

describe('SspotRPage', () => {
  let component: SspotRPage;
  let fixture: ComponentFixture<SspotRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SspotRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SspotRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
