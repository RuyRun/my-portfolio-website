import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './component/about-section/about-section.component';
import { SkillsSectionComponent } from './component/skills-section/skills-section.component';

const routes: Routes = [
  { path: '', component: AboutSectionComponent },
  { path: 'about', component: AboutSectionComponent },
  { path: 'skill', component: SkillsSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
