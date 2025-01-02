import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Repository } from '../models/repository';
import { take } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  repositories: Repository[] = [];


  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Behzad Ashrafi - Portfolio')
  }
  ngOnInit(): void {
    this.fetchRepositories()    
  }


  fetchRepositories() {
    this.projectService.getRepositories().subscribe(
      (repositories) => {
        this.repositories = repositories;
      }
    )
  }
}

