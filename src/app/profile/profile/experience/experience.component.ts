import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';

import { SplitPipe } from '../split.pipe';

@Component({
  selector: 'app-experience',
  standalone:true,
  imports:[CommonModule,SplitPipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

workexp: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {

      this.workexp =  this.profileService.exprience()
    }
}
