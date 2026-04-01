import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  active: string = '';
  
  setActive(section: string) {
    this.active = section;
  }

  currentLanguage: 'EN' | 'DE' = 'EN';

  setLanguage(lang: 'EN' | 'DE') {
    this.currentLanguage = lang;
  }
}
