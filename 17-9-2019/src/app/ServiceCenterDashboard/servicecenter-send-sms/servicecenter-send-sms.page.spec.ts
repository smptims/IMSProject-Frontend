import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterSendSmsPage } from './servicecenter-send-sms.page';

describe('ServicecenterSendSmsPage', () => {
  let component: ServicecenterSendSmsPage;
  let fixture: ComponentFixture<ServicecenterSendSmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecenterSendSmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterSendSmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
