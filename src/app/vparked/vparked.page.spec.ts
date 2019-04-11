import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VparkedPage } from './vparked.page';

describe('VparkedPage', () => {
  let component: VparkedPage;
  let fixture: ComponentFixture<VparkedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VparkedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VparkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
