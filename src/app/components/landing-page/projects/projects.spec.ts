import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';
import { TranslateModule } from '@ngx-translate/core';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
