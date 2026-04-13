import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Hero } from "./components/landing-page/hero/hero";
import { Footer } from './components/landing-page/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
