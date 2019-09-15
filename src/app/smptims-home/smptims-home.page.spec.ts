import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmptimsHomePage } from './smptims-home.page';

describe('SmptimsHomePage', () => {
  let component: SmptimsHomePage;
  let fixture: ComponentFixture<SmptimsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmptimsHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmptimsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
