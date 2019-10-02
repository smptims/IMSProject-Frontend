import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEditPage } from './service-edit.page';

describe('ServiceEditPage', () => {
  let component: ServiceEditPage;
  let fixture: ComponentFixture<ServiceEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
