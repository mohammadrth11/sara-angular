import { AfterViewInit, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Listbox } from 'primeng/listbox';
import { ChartModule } from 'primeng/chart';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Slider, CommonModule, Listbox, ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  
}