import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name:"Event Recognition",
      description: "Real-time pose estimation and event recognition by using TensorFlow and Openpose",
      language:"Python",
      fork: 2,
      star:3,
      size: "514570 KB",
      link : ""
    },
    {
      name:"Angularfolio",
      description: "⚡️ Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
      language:"JavaScript",
      fork: 0,
      star:1,
      link: "https://github.com/sarthakgoenka/portfolio",
      size: "80569 KB"
    },
    {
      name:"Natours(Nature+Tours)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
      language:"CSS",
      fork: 0,
      star:2,
      link: "https://natours-8aa57.web.app/",
      size: "1780 KB"
    },
    {
      name:"Personal-Doc",
      description: "It is a health chatbot in which users report the symptoms of their\n" +
        "illness to the app. Based on the gathered information fed to its smart algorithm, Sensely interprets the user’s symptoms and recommends a diagnosis.",
      language:"Python",
      fork: 1,
      star:5,
      link: "https://personal-doc.herokuapp.com/",
      size: "45862 KB"
    },
    {
      name:"Node Chat Application",
      description: "A simple real-time chat application. It features public chat rooms or\n" +
        "you can create private chat rooms with friends, family, etc. You can chat, attach your ﬁles and share your live location as well.",
      language:"JavaScript",
      fork: 2,
      star:3,
      link: "https://github.com/sarthakgoenka/node-chat-app",
      size: "60569 KB"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
