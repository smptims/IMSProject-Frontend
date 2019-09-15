import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForgetpassPage } from './customer-forgetpass.page';

describe('CustomerForgetpassPage', () => {
  let component: CustomerForgetpassPage;
  let fixture: ComponentFixture<CustomerForgetpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerForgetpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerForgetpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
