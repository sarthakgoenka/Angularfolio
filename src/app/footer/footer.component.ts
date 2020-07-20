import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ])]
})
export class FooterComponent implements OnInit {

  state = 'normal';
  constructor() { }

  ngOnInit(): void {

  }

  onAnimate(){
    this.state = 'highlited';
  }
}
