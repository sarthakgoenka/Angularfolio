import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/sarthakgoenka/portfolio",
    },
    {
      link: "",
    },
    {
      link: "https://natours-8aa57.web.app/",
    },
    {
      link:""
    },
    {

      link: "http://node-room-chat.herokuapp.com/",
    },
    {
      link: "https://personal-doc.herokuapp.com/",

    }
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {


    this.apollo.query<any>({
      query: gql`
      {
      user(login: "sarthakgoenka") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage

                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
      `
    }).subscribe((data) => {
      this.projects2 = data.data.user.pinnedItems.edges;
      // console.log(this.projects2);
    });
  }

}
