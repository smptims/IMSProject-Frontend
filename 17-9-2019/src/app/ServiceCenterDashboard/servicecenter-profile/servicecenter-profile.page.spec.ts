import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterProfilePage } from './servicecenter-profile.page';

describe('ServicecenterProfilePage', () => {
  let component: ServicecenterProfilePage;
  let fixture: ComponentFixture<ServicecenterProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecenterProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
