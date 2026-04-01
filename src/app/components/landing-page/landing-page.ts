import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, About],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
