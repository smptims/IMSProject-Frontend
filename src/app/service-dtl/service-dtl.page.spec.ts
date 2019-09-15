import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDtlPage } from './service-dtl.page';

describe('ServiceDtlPage', () => {
  let component: ServiceDtlPage;
  let fixture: ComponentFixture<ServiceDtlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDtlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDtlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
