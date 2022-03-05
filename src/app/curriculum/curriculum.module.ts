import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';
import { SharedModule } from '../shared/shared.module';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';


@NgModule({
  declarations: [CurriculumComponent, TimelineComponent, TimelineItemComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    SharedModule
  ]
})
export class CurriculumModule { }
