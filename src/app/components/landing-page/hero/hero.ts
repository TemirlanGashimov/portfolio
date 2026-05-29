import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class Hero {

}
