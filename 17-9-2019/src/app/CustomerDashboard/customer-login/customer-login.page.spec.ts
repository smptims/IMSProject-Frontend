import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginPage } from './customer-login.page';

describe('CustomerLoginPage', () => {
  let component: CustomerLoginPage;
  let fixture: ComponentFixture<CustomerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
