import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailPage } from './send-mail.page';

describe('SendMailPage', () => {
  let component: SendMailPage;
  let fixture: ComponentFixture<SendMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
