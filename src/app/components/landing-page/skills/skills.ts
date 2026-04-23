import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skills = [
    { name: 'HTML', icon: 'html.png', active: true },
    { name: 'CSS', icon: 'css.png', active: true },
    { name: 'JavaScript', icon: 'javascript.png', active: true },
    { name: 'Material Design', icon: 'material_design.png', active: false},
    { name: 'TypeScript', icon: 'typescript.png', active: true },
    { name: 'Angular', icon: 'angular.png', active: true },
    { name: 'Supabase', icon: 'supabase.png', active: false },
    { name: 'Git', icon: 'git.png', active: true },
    { name: 'Rest-API', icon: 'rest-api.png', active: true },
    { name: 'Scrum', icon: 'scrum.png', active: false },
    { name: 'Growth mindset', icon: 'growth_mindset.png', active: true, tooltip: true }
  ];
}
