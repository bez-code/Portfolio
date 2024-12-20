import { Injectable } from '@angular/core';
import { Project } from './models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from './models/repository';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  // projects: Project[] = []

  // getProject() {
  //   return this.projects;
  // }

  // getProjectById(id: number): Project {
  //   let project = this.projects.find(project => project.id === id);

  //   if (project === undefined) {
  //     throw new TypeError('project not found')
  //   }
  //   return project;
  // }
 private baseUrl = 'https://api.github.com/users/bez-code';

 getRepositories(): Observable<Repository[]> {
  return this.http.get<Repository[]>(`${this.baseUrl}/repos`);
}
 

}
