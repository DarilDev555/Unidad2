import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/**
 * @title Button toggle appearance
 */
@Component({
  selector: 'button-toggle-appearance-example',
  templateUrl: 'button-toggle-appearance-example.component.html',
  styleUrl: 'button-toggle-appearance-example.component.css',
  standalone: true,
  imports: [MatButtonToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleAppearanceExample {}
