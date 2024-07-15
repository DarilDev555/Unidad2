import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeOverviewExample } from './badge-overview-example.component';
describe('BadgeOverviewExampleComponent', () => {
  let component: BadgeOverviewExample;
  let fixture: ComponentFixture<BadgeOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
