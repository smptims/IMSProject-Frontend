import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailListPage } from './user-mail-list.page';

describe('UserMailListPage', () => {
  let component: UserMailListPage;
  let fixture: ComponentFixture<UserMailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
