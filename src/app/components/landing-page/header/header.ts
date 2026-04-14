import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  active: string = '';
  
  setActive(section: string) {
    this.active = section;
  }

  currentLanguage: 'EN' | 'DE' = 'EN';

  setLanguage(lang: 'EN' | 'DE') {
    this.currentLanguage = lang;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
