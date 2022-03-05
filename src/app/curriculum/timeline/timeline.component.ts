import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from '../timeline-item/TimelineItem';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() timelineItens: TimelineItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
