import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  repo: Repository[] = []

  constructor(private http: HttpClient) { }
  
  private baseUrl = 'https://api.github.com/users/bez-code';

  getProjectById(id: number): Repository {
    let project = this.repo.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('project not found')
    }
    return project;
  }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/repos`).pipe(
      map((repos) => {
        return repos.map((repo) => {
          return {
            ...repo,
            pictures: this.getImageUrls(repo.name)
          };
        });
      })
    );
  }

  getColor(tag: string): string {
    const colors: { [key: string]: string } = {
      'angular-framework': '#dd1b16',
      'TypeScript': '#007acc',
      'JavaScript': '#f7df1e',
      // Add more tag colors as needed
    };
    return colors[tag] || '#6c757d';
  }

  getImageUrls(repoName: string, imageCount: number = 2): string[] {
    const baseUrl = `https://raw.githubusercontent.com/bez-code/${repoName}/main/images/`;
    const images: string[] = [];
    
    for (let i = 1; i <= 3; i++) {
      images.push(`${baseUrl}image${i}.jpg`);
    }
  
    return images;
  }

}
