import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDetailPage } from './past-detail.page';

describe('PastDetailPage', () => {
  let component: PastDetailPage;
  let fixture: ComponentFixture<PastDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
