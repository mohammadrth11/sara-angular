import { Editor } from 'primeng/editor';
import { DatePicker } from 'primeng/datepicker';
import { ColorPicker } from 'primeng/colorpicker';
import { ChartModule } from 'primeng/chart';
import {Component} from '@angular/core';
import { Slider } from 'primeng/slider';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { AutoComplete } from 'primeng/autocomplete';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

interface City {
  name: string;
  code: string;
}
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    Slider,
    CommonModule,
    ChartModule,
    FormsModule,
    ColorPicker,
    Slider,
    ButtonModule,
    RippleModule,
    OrganizationChartModule,
    AutoComplete,
    AutoCompleteModule,
    DatePicker,
    Editor,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    SelectModule,
    InputGroupAddonModule,
    InputGroupModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  color: string | undefined;
  value!: number;
  data: TreeNode[] = [
    {
      label: 'F.C Barcelona',
      expanded: true,
      children: [
        {
          label: 'Argentina',
          expanded: true,
          children: [
            {
              label: 'Argentina',
            },
            {
              label: 'France',
            },
          ],
        },
        {
          label: 'France',
          expanded: true,
          children: [
            {
              label: 'France',
            },
            {
              label: 'Morocco',
            },
          ],
        },
      ],
    },
  ];
  items: any[] = [];

  // value: any;

  search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }

  date: Date | undefined;
  text: string | undefined;

  value2: string | undefined;

  text1: string | undefined;

  text2: string | undefined;

  number: string | undefined;

  selectedCity: City | undefined;

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
}
