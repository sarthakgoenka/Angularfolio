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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        role: "Computer Science & Engineering",
        company: "GLA University",
        color: "#3f703f",
        companylogo: "../../../assets/images/gla.png",
        date: "Aug 2016 – Jul 2020",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        role: "Software Engineer Intern",
        company: "Innovative Buiness Solutions",
        color: "#ff9102",
        companylogo: "../../../assets/images/ibs.png",
        date: "Jun 2018 – Aug 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
