import { Component, OnInit } from '@angular/core';
import { SkillInfo } from './skill-info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: SkillInfo[] = [
    {
      title: 'Angular',
      skillIcon: 'angular',
      description: "Nivel de aprendizado avançado na linguagem."
    },
    {
      title: '.NET C#',
      skillIcon: 'c-sharp',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
    {
      title: 'Python',
      skillIcon: 'python',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
    {
      title: 'Java',
      skillIcon: 'java',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
    {
      title: 'Sql Server',
      skillIcon: 'sql',
      description: "Nivel de aprendizado intermediário na linguagem."
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
