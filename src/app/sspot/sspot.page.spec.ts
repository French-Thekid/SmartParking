import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SspotPage } from './sspot.page';

describe('SspotPage', () => {
  let component: SspotPage;
  let fixture: ComponentFixture<SspotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SspotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SspotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
