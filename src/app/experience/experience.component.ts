import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "Infosys",
        color: "#3781c2",
        companylogo: "../../../assets/images/infosys.png",
        date: "Upcoming",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Upcoming Software Enginer Specialist(SES) at Infosys",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Computer Science & Engineering",
        company: "GLA University",
        color: "#3f703f",
        companylogo: "../../../assets/images/gla.png",
        date: "Aug 2016 – Jul 2020",
        desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.6",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Software Engineer Intern",
        company: "Innovative Buiness Solutions",
        color: "#ff9102",
        companylogo: "../../../assets/images/ibs.png",
        date: "Jun 2018 – Aug 2018",
        desc: "The 6- Week summer training focused on full-stack web development and helped learn to work in a team",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
