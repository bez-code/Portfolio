import { Injectable } from '@angular/core';
import { Project } from './models/project';
import { Tags } from './models/tags';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projects: Project[] = [
    { id: 0, name: 'CRUD Project', summary: 'sample summary', discription: '', projectLink: '', pictures: ["../../assets/1.JPG","../../assets/2.JPG","../../assets/2.JPG"], tags: [Tags.Angular, Tags.TypeScript] },
    { id: 1, name: 'Netflix Clone', summary: 'sample summary', discription: '', projectLink: '', pictures: ["../../assets/1.JPG","../../assets/2.JPG","../../assets/2.JPG"], tags: [Tags.Angular, Tags.TypeScript] },
    { id: 2, name: 'Blog App', summary: 'sample summary', discription: '', projectLink: '', pictures: ["../../assets/1.JPG","../../assets/2.JPG","../../assets/2.JPG"], tags: [Tags.Angular, Tags.TypeScript] }
  ]

  getProject() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('project not found')
    }
    return project;
  }
}
