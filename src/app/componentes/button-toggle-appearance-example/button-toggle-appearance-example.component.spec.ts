import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleAppearanceExample } from './button-toggle-appearance-example.component';

describe('ButtonToggleAppearanceExampleComponent', () => {
  let component: ButtonToggleAppearanceExample;
  let fixture: ComponentFixture<ButtonToggleAppearanceExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleAppearanceExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleAppearanceExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
