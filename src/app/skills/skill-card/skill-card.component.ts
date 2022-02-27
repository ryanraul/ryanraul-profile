import { Component, Input, OnInit } from '@angular/core';
import { SkillInfo } from '../skill-info';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: SkillInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
