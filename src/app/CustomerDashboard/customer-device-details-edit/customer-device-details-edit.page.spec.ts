import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeviceDetailsEditPage } from './customer-device-details-edit.page';

describe('CustomerDeviceDetailsEditPage', () => {
  let component: CustomerDeviceDetailsEditPage;
  let fixture: ComponentFixture<CustomerDeviceDetailsEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDeviceDetailsEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeviceDetailsEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
