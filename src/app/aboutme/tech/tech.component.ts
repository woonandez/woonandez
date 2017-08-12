import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  @Input('skill') skill: { href: string, src: string, desc: string };

  constructor() {}

  ngOnInit() {
  }

}
