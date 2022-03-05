import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then((m) => m.SkillsModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then((m) => m.CurriculumModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
