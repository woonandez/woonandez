import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'app/shared';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  photos: Array<Photo> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/apps')
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.photos = data;
        }
      });
  }
}






