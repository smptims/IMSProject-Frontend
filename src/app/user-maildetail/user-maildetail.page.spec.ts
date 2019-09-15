import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMaildetailPage } from './user-maildetail.page';

describe('UserMaildetailPage', () => {
  let component: UserMaildetailPage;
  let fixture: ComponentFixture<UserMaildetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMaildetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMaildetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
