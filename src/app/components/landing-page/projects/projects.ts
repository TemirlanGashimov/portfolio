import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  technologies: string[];
  image: string;
  active: boolean;
}


@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects: Project[] = [
    {
      name: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'public/images/projects/join.png',
      active: true
    },
    {
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'images/el_pollo_loco.png',
      active: true

    },
    {
      name: 'DA Bubble',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'images/dabubble.png',
      active: true
    }
];

get activeProjects() {
  return this.projects.filter(p => p.active);
}
}
