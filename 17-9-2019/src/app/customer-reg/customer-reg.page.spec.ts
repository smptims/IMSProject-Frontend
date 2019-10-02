import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegPage } from './customer-reg.page';

describe('CustomerRegPage', () => {
  let component: CustomerRegPage;
  let fixture: ComponentFixture<CustomerRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
