import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-github-repo-card',
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.scss']
})
export class GithubRepoCardComponent implements OnInit {
  @Input() github: {name:string, description:string, language:string, fork:number, star:number, size:string, link:string};
  constructor(private window: Window) { }

  // public colorClass:string = this.github.language + " language-color";
  ngOnInit(): void {
  }
  onCardClick(){
    let win = window.open(this.github.link, "_blank");
    win.focus();
  }


}
