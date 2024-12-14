import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tags } from '../models/tags';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private titleService: Title, private projectServive: ProjectService) {
    this.titleService.setTitle('Behzad Ashrafi - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectServive.getProject()
  }

  projects: Project[] = []


}

