import { Component, OnInit } from '@angular/core';
import { TimelineItem } from './timeline-item/TimelineItem';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

    
  timelineEducation: TimelineItem[] = [
    {
      title: 'Angular',
      date: '06/2021',
      description: "Nivel de aprendizado avançado na linguagem."
    },
    {
      title: '.NET C#',
      date: '05/2022',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
    {
      title: '.NET C#',
      date: '05/2022',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
    {
      title: '.NET C#',
      date: '05/2022',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
  ];

  timelineProfessional: TimelineItem[] = [
    {
      title: 'Angular',
      date: '06/2021',
      description: "Nivel de aprendizado avançado na linguagem."
    },
    {
      title: '.NET C#',
      date: '05/2022',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
  ];


  ngOnInit(): void {
  }

}
