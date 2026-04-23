import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
