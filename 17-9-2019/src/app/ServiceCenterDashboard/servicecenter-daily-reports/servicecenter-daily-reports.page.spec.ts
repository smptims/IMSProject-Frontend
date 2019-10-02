import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterDailyReportsPage } from './servicecenter-daily-reports.page';

describe('ServicecenterDailyReportsPage', () => {
  let component: ServicecenterDailyReportsPage;
  let fixture: ComponentFixture<ServicecenterDailyReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecenterDailyReportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterDailyReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
