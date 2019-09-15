import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReportsPage } from './daily-reports.page';



describe('DailyReportsPage', () => {
  let component: DailyReportsPage;
  let fixture: ComponentFixture<DailyReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyReportsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
