import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss']
})
export class ContantComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Behzad Ashrafi - Contact')
  }
}
