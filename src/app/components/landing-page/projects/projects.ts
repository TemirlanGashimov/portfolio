import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Project {
  name: string;
  technologies: string[];
  image: string;
  modalImage: string;
  active: boolean;
  description: string;
  github: string;
  live: string;
}


@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslatePipe],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  selectedProject: Project | null = null;

  techIcons: {[key: string]: string} ={
    'HTML': 'icons/html_dialog.png',
    'CSS': 'icons/css_dialog.png',
    'JavaScript': 'icons/javascript_dialog.png',
    'TypeScript': 'icons/typescript_dialog.png',
    'Angular': 'icons/angular_dialog.png',
    'Firebase': 'icons/firebase_dialog.png'

  }


  projects: Project[] = [
    {
      name: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'images/projects/join.png',
      modalImage: 'images/projects/join_dialog.png',
      active: true,
      description: 'PROJECTS-MODAL.JOIN.DESCRIPTION',
      github: '',
      live: ''
      
    },
    {
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'images/projects/el_pollo_loco.png',
      modalImage: 'images/projects/el_pollo_loco_dialog.png',
      active: true,
      description: 'PROJECTS-MODAL.POLLO.DESCRIPTION',
      github: '',
      live: ''

    },
    {
      name: 'DABubble',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'images/projects/dabubble.png',
      modalImage: 'images/projects/dabubble_dialog.png',
      active: true,
      description: 'PROJECTS-MODAL.DABUBBLE.DESCRIPTION',
      github: '',
      live: ''
    }
];

get activeProjects() {
  return this.projects.filter(p => p.active);
}

openProject(project: Project) {
  this.selectedProject = project;

  document.body.classList.add('no-scroll');
}

closeProject() {
  this.selectedProject = null;

  document.body.classList.remove('no-scroll');
}

nextProject() {
  const active = this.activeProjects;

  if (!this.selectedProject || active.length <=1) return;

  const index = active.findIndex(p => p === this.selectedProject);
  const nextIndex = (index +1) % active.length;

  this.selectedProject = active[nextIndex];
}

@HostListener('document:keydown.escape')
handleEscape() {
  if (this.selectedProject) {
    this.closeProject();
  }
}

getProjectNumber(project: Project): string {
  const index = this.activeProjects.findIndex(p => p === project);
  return (index +1).toString().padStart(2, '0');
}

@ViewChild('modalRef') modalRef!: ElementRef;

@HostListener('document:keydown', ['$event'])
handleTab(event: KeyboardEvent) {
  if (!this.selectedProject || event.key !== 'Tab') return;

  const focusableElements = this.modalRef.nativeElement.querySelectorAll(
    'a, button, [tabindex]:not([tabindex="-1"])'
  );

  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length -1];

  const isShift = event.shiftKey;

  if (!isShift && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }

  if( isShift && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }
}
}
