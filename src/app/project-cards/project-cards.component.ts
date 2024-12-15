import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  @Input() project = {} as Project;

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }
  openModal() {
    const modalOption: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      },
      animated: true
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOption);
  }

}
