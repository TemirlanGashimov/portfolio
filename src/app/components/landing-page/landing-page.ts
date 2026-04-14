import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { ContactMe } from './contact-me/contact-me';




@Component({
  selector: 'app-landing-page',
  imports: [Hero, About, Skills, Projects, ContactMe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
