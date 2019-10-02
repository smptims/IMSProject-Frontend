import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterDeviceDetailsEditPage } from './servicecenter-device-details-edit.page';

describe('ServicecenterDeviceDetailsEditPage', () => {
  let component: ServicecenterDeviceDetailsEditPage;
  let fixture: ComponentFixture<ServicecenterDeviceDetailsEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecenterDeviceDetailsEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterDeviceDetailsEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
