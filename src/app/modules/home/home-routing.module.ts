import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'hero/:id',
    component: HeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
