import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Footer } from './components/landing-page/footer/footer';
import { Header } from './components/landing-page/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
