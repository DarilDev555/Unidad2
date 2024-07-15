import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionOverviewExampleComponent } from './expansion-overview-example.component';

describe('ExpansionOverviewExampleComponent', () => {
  let component: ExpansionOverviewExampleComponent;
  let fixture: ComponentFixture<ExpansionOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionOverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
