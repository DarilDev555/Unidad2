import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverviewExample } from './bottom-sheet-overview-example.component';

describe('BottomSheetOverviewExampleComponent', () => {
  let component: BottomSheetOverviewExample;
  let fixture: ComponentFixture<BottomSheetOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
