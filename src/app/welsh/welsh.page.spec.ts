import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelshPage } from './welsh.page';

describe('WelshPage', () => {
  let component: WelshPage;
  let fixture: ComponentFixture<WelshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelshPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
