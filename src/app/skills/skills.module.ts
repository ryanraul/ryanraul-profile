import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SharedModule } from '../shared/shared.module';
import { SkillCardComponent } from './skill-card/skill-card.component';


@NgModule({
  declarations: [SkillsComponent, SkillCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    SkillsRoutingModule
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
