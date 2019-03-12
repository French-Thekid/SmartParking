import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortalPage } from './admin-portal.page';

describe('AdminPortalPage', () => {
  let component: AdminPortalPage;
  let fixture: ComponentFixture<AdminPortalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPortalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
