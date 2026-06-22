import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Internal } from './internal/internal';
import { External } from './external/external';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Internal, External],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
