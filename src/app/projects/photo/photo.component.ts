import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input('photo') photo: { appName: string, thumbnail: string, full: string, github: string, desc: string };

  constructor() {}

  ngOnInit() {
  }

}
