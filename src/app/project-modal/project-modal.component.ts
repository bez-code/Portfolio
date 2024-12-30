import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Repository } from '../models/repository';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {

  @Input() project = {} as Repository;

  constructor(public bsModalRef: BsModalRef, 
    private projectService: ProjectService
  ) { }
  getColor(tag: string): string {
    return this.projectService.getColor(tag);
  }

}
