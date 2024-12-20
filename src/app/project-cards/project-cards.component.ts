import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';
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
  
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private projectService: ProjectService) { }
  
  ngOnInit(): void {
   this.fetchRepositories()

  }

  openModal() {
    const modalOption: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.repositories
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

}


