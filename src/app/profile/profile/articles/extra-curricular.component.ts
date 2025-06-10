import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extra-curricular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extra-curricular.component.html',
  styleUrls: ['./extra-curricular.component.scss']
})
export class ExtraCurricularComponent implements OnInit {
  extras: any
  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.extras = this.profileService.extraCurricular()
  }
}
