import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { ProjectService } from '../project.service';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent implements OnInit {

  repositories: Repository[] = [];
  imageMapping: any = {};

  
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private projectService: ProjectService) { }
  
  ngOnInit(): void {
   this.fetchRepositories();
 
}


  openModal(project: Repository) {
    const modalOption: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: project
            },
      animated: true
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOption);
  }

  fetchRepositories() {
    this.projectService.getRepositories().subscribe(
      (repositories) => {
        this.repositories = repositories;
        console.log(this.repositories);

      }
    )
  }

  getColor(tag: string): string {
    return this.projectService.getColor(tag);
  }

}


