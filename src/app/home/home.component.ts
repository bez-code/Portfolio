import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuresProjest = {} as Repository
  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle('Behzad Ashrafi - Home  ')
  }
  ngOnInit(): void {
   
  }
  
}
