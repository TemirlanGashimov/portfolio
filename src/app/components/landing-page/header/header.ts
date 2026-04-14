import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  activeSection: string = '';
  
  setActive(section: string) {
    this.activeSection = section;
  }

  currentLanguage: 'EN' | 'DE' = 'EN';

  setLanguage(lang: 'EN' | 'DE') {
    this.currentLanguage = lang;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  scrollTo(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
}
}
