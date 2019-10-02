import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefertravelViewPage } from './refertravel-view.page';

describe('RefertravelViewPage', () => {
  let component: RefertravelViewPage;
  let fixture: ComponentFixture<RefertravelViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefertravelViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefertravelViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
