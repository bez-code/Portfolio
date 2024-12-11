import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  @Input() projectName: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectLink: string = '';
}
