import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailsEditPage } from './device-details-edit.page';

describe('DeviceDetailsEditPage', () => {
  let component: DeviceDetailsEditPage;
  let fixture: ComponentFixture<DeviceDetailsEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDetailsEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
