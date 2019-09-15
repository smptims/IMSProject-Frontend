import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRegPage } from './service-reg.page';

describe('ServiceRegPage', () => {
  let component: ServiceRegPage;
  let fixture: ComponentFixture<ServiceRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
