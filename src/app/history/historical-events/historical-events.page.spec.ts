import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalEventsPage } from './historical-events.page';

describe('HistoricalEventsPage', () => {
  let component: HistoricalEventsPage;
  let fixture: ComponentFixture<HistoricalEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
