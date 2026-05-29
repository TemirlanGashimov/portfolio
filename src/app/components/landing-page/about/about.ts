import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {}
