import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtraCurricularComponent } from './articles/extra-curricular.component';


@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [ProfileComponent, HeaderComponent, IntroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ExtraCurricularComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
