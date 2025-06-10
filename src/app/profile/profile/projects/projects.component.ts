import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects()
    console.log(this.projects)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
