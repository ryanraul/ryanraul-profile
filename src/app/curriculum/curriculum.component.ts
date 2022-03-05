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
      title: 'Computer Technician',
      date: '01/2016 - 12/2018',
      local: 'Etec Salles Gomes - Tatui, SP - Brasil',
      description: "Formação em técnico de informática Integrado ao Ensino Médio."
    },
    {
      title: 'Computer Engineering',
      date: '01/2019 - 12/2023',
      local: 'Facens - Sorocaba, SP - Brasil',
      description: "Graduação em Engenharia da Computação."
    },
    {
      title: 'Acesso à dados com .NET, C#, Dapper e SQL Server.',
      date: '08/2021 - 08/2021',
      local: 'Balta - Online Course',
      description: "Angular: Boas práticas em arquiteturas e formulários."
    },
    {
      title: 'Angular: Boas práticas em arquiteturas e formulários.',
      date: '02/2022 - 02/2022',
      local: 'Alura - Online Course',
      description: "Angular: Boas práticas em arquiteturas e formulários."
    },
    
  ];

  timelineProfessional: TimelineItem[] = [
    {
      title: 'Uppertools',
      date: '09/2020 - 09/2021',
      local: 'Sorocaba, SP - Brasil',
      description: `
        Desenvolvimento ou manutenção aos projetos utilizando boas práticas.
        Uso dos conceitos das metodologias ágeis Scrum e Kanban para comunicação e desenvolvimento em equipe.
        Tecnologias utilizadas: C#, SQL, Hana e SAP.
      `
    },
    {
      title: 'Neobpo',
      date: '09/2021 - Current',
      local: 'São Paulo, SP - Brasil',
      description: `Desenvolvimento e manutenção aos projetos utilizando boas práticas.
      Tecnologias utilizadas: C#, Angular e SQL.`
    },
  ];


  ngOnInit(): void {
  }

}
