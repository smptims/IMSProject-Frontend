import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLoginPage } from './service-login.page';

describe('ServiceLoginPage', () => {
  let component: ServiceLoginPage;
  let fixture: ComponentFixture<ServiceLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
