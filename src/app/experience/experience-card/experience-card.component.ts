import {Component, Input, OnInit} from '@angular/core';
import ngColorThief from 'angular-colorthief';
@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
@Input() experience;
  constructor() { }

  // angular.module('yourApp', ['ngColorThief'])
  ngOnInit(): void {
  }

}
