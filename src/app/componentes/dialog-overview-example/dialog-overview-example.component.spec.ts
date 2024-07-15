import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExampleDialog } from './dialog-overview-example.component';

describe('DialogOverviewExampleComponent', () => {
  let component: DialogOverviewExampleDialog;
  let fixture: ComponentFixture<DialogOverviewExampleDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOverviewExampleDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExampleDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
