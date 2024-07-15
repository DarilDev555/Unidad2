import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxOverviewExample } from './checkbox-overview-example.component';

describe('CheckboxOverviewExampleComponent', () => {
  let component: CheckboxOverviewExample;
  let fixture: ComponentFixture<CheckboxOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
