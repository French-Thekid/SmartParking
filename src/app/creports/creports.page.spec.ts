import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreportsPage } from './creports.page';

describe('CreportsPage', () => {
  let component: CreportsPage;
  let fixture: ComponentFixture<CreportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
