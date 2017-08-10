import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  photos = ['https://preview.ibb.co/mDJHxF/Screen_Shot_2017_08_10_at_10_07_53_AM.png', 'https://preview.ibb.co/nQg9Ba/Screen_Shot_2017_08_10_at_10_08_06_AM.png', 'https://preview.ibb.co/cwDpBa/Screen_Shot_2017_08_10_at_10_08_18_AM.png', 'https://preview.ibb.co/eAnhWa/Screen_Shot_2017_08_10_at_10_08_40_AM.png'];

  constructor() {}

  ngOnInit() {
  }

}
