import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../project.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuresProjest = {} as Project
  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Behzad Ashrafi - Home  ')
  }
  ngOnInit(): void {
   
  }
  
}
