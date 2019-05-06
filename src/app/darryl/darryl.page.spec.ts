import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarrylPage } from './darryl.page';

describe('DarrylPage', () => {
  let component: DarrylPage;
  let fixture: ComponentFixture<DarrylPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarrylPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarrylPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
