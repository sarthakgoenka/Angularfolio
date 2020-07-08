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
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut autem blanditiis consequuntur deserunt dolore earum, eius et, iste itaque laudantium modi nesciunt officiis omnis quasi quisquam quos repellat suscipit?",
      language:"Python",
      fork: 2,
      star:3,
      size: "51450 KB",
      link : ""
    },
    {
      name:"Angularfolio",
      description: "⚡️ Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
      language:"JavaScript",
      fork: 0,
      star:1,
      link: "https://github.com/sarthakgoenka/portfolio",
      size: "10569 KB"
    },
    {
      name:"Natoure",
      description: "⚡️ Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
      language:"CSS",
      fork: 0,
      star:2,
      link: "",
      size: "780 KB"
    },
    {
      name:"Personal-Doc",
      description: "It is a health chatbot in which users report the symptoms of their\n" +
        "illness to the app. Based on the gathered information fed to its smart algorithm, Sensely interprets the user’s symptoms and recommends a diagnosis.",
      language:"Python",
      fork: 1,
      star:5,
      link: "https://personal-doc.herokuapp.com/",
      size: "15862 KB"
    },
    {
      name:"Node Chat Application",
      description: "A simple real-time chat application. It features public chat rooms or\n" +
        "you can create private chat rooms with friends, family, etc. You can chat, attach your ﬁles and share your live location as well.",
      language:"Python",
      fork: 2,
      star:3,
      link: "https://github.com/sarthakgoenka/node-chat-app",
      size: "10569 KB"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
