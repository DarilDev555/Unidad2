import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AutocompleteSimpleExample } from './componentes/autocomplete-simple-example/autocomplete-simple-example.component';
import { BadgeOverviewExample } from './componentes/badge-overview-example/badge-overview-example.component';
import { BottomSheetOverviewExample } from './componentes/bottom-sheet-overview-example/bottom-sheet-overview-example.component';
import { ButtonOverviewExample } from './componentes/button-overview-example/button-overview-example.component';
import { ButtonToggleAppearanceExample } from './componentes/button-toggle-appearance-example/button-toggle-appearance-example.component';
import { CardOverviewExample } from './componentes/card-overview-example/card-overview-example.component';
import { CheckboxOverviewExample } from './componentes/checkbox-overview-example/checkbox-overview-example.component';
import { ChipsStackedExample } from './componentes/chips-stacked-example/chips-stacked-example.component';	
import { DatepickerInlineCalendarExample } from './componentes/datepicker-inline-calendar-example/datepicker-inline-calendar-example.component';
import { DialogOverviewExample } from './componentes/dialog-overview-example/dialog-overview-example.component';
import { DividerOverviewExample } from './componentes/divider-overview-example/divider-overview-example.component';
import { ExpansionOverviewExample } from './componentes/expansion-overview-example/expansion-overview-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
          RouterOutlet,
          RouterModule,
          AutocompleteSimpleExample,
          BadgeOverviewExample,
          BottomSheetOverviewExample,
          ButtonOverviewExample,
          ButtonToggleAppearanceExample,
          CardOverviewExample,
          CheckboxOverviewExample,
          ChipsStackedExample,
          DatepickerInlineCalendarExample,
          DialogOverviewExample,
          DividerOverviewExample,
          ExpansionOverviewExample
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Unidad2';
}
