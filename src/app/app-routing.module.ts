import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContantComponent } from './contant/contant.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'resume', component:ResumeComponent},
  {path:'contact', component:ContantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
