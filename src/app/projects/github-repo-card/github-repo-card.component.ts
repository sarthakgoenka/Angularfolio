import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-github-repo-card',
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.scss']
})
export class GithubRepoCardComponent implements OnInit {
  // @Input() github: {name:string, description:string, language:string, fork:number, star:number, size:string, link:string};
  @Input() github:any;
  @Input() link:any;
  constructor(private window: Window) { }

  ngOnInit(): void {
    console.log(this.github.node.url);
  }

  onCardClick(){
    let win = window.open(this.github.node.url, "_blank");
    win.focus();
  }


}
