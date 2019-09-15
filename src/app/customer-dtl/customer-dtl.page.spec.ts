import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDtlPage } from './customer-dtl.page';

describe('CustomerDtlPage', () => {
  let component: CustomerDtlPage;
  let fixture: ComponentFixture<CustomerDtlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDtlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDtlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
