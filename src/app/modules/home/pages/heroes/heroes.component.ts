import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/modules/layout/components/header/header.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {}
