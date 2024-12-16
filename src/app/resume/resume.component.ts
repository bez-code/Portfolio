import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  oneAtATime = true;
  isWorkExpreinceOpen = false;
  isEducationOpen = false;
  isSkillsOpen = false;
  isCertificatesOpen = false;
  
  constructor(private titleService: Title, private rederer: Renderer2) {
    this.titleService.setTitle('Behzad Ashrafi - Resume')
  }

  downloadFile() {
    const link = this.rederer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/1.JPG');
    link.setAttribute('download', '1.jpg');
    link.click();
    link.remove()
  }


}
