import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, RouterLink ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private translate = inject(TranslateService);
  private router = inject(Router);

  activeSection: string = '';
  menuOpen = false;

  currentLanguage: 'en' | 'de' = 'en';

  constructor(){
    const savedLang = localStorage.getItem('lang') as 'en' | 'de';

    if (savedLang) {
      this.currentLanguage = savedLang;
      this.translate.use(savedLang);
    } else {
      this.translate.use('en');
    }
  }

  setLanguage(lang: 'en' | 'de'){
    this.currentLanguage = lang;
    this.translate.use(lang);

    localStorage.setItem('lang', lang);
  }

   toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  scrollTo(section: string) {
    this.activeSection = section;

    const element = document.getElementById(section);

    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
} else {
  this.router.navigate(['/'],  {fragment: section})
}
  }

}
