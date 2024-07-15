import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsStackedExample } from './chips-stacked-example.component';

describe('ChipsStackedExampleComponent', () => {
  let component: ChipsStackedExample;
  let fixture: ComponentFixture<ChipsStackedExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsStackedExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsStackedExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
