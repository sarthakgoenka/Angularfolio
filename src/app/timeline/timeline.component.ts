import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "Infosys",
      duration: "current",
      content: "Upcoming Full stack develover at Infosys!",
      className: "direction-r"
    },
    {
      heading: "B.Tech",
      duration: "2016 - 2020",
      content: "Successfully completed my B.tech in Computer science from GLA University, Mathura.",
      className: "direction-l"
    },
    {
      heading: "Intermediate",
      duration: "2015-2016",
      content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Shikohabad.\n" +
        "Major: PCM.",
      className: "direction-r"
    },
    {
      heading: "High School",
      duration: "2013-2014",
      content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
      className: "direction-l"
    }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
