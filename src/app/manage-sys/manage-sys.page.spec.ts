import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSysPage } from './manage-sys.page';

describe('ManageSysPage', () => {
  let component: ManageSysPage;
  let fixture: ComponentFixture<ManageSysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
