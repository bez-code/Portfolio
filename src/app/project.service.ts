import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from './models/repository';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  repo: Repository[]=[]
  constructor(private http: HttpClient) { }
  

  getProjectById(id: number): Repository {
    let project = this.repo.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('project not found')
    }
    return project;
  }
 private baseUrl = 'https://api.github.com/users/bez-code';

 getRepositories(): Observable<Repository[]> {
  return this.http.get<Repository[]>(`${this.baseUrl}/repos`);
}
 

}
