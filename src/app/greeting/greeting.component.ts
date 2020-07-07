import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Sarthak Agrawal",
    title: "Hi all, I'm Sarthak",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angularjs / Nodejs and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1-twgC72PDeiFzc9fbqlDjbjCfPktjRZc/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
