import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  @Input() project = {} as Project;

}
