import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInlineCalendarExample } from './datepicker-inline-calendar-example.component';

describe('DatepickerInlineCalendarExampleComponent', () => {
  let component: DatepickerInlineCalendarExample;
  let fixture: ComponentFixture<DatepickerInlineCalendarExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerInlineCalendarExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerInlineCalendarExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
