import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Interpolation } from './interpolation/interpolation';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';
import { TwowayBinding } from './twoway-binding/twoway-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Interpolation, PropertyBinding, EventBinding, TwowayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
