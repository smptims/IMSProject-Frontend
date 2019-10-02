import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterNotificationsPage } from './servicecenter-notifications.page';

describe('ServicecenterNotificationsPage', () => {
  let component: ServicecenterNotificationsPage;
  let fixture: ComponentFixture<ServicecenterNotificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecenterNotificationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
