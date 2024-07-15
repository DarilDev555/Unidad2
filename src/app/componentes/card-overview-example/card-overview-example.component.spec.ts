import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverviewExample } from './card-overview-example.component';

describe('CardOverviewExampleComponent', () => {
  let component: CardOverviewExample;
  let fixture: ComponentFixture<CardOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
