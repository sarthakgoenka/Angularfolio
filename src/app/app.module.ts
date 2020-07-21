import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ButtonComponent } from './button/button.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { FooterComponent } from './footer/footer.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceCardComponent } from './experience/experience-card/experience-card.component';
import { GithubRepoCardComponent } from './projects/github-repo-card/github-repo-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { GraphQLModule } from './projects/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { GithubCalendarComponent } from './github-calendar/github-calendar.component';
import {AnimateModule} from "./animation/animate.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

      GreetingComponent,
        ButtonComponent,
        SocialMediaComponent,
        SkillsComponent,
        SoftwareSkillComponent,
        SkillProgressComponent,
        FooterComponent,
        TopButtonComponent,
        ContactComponent,
        TimelineComponent,
        ExperienceComponent,
        ExperienceCardComponent,
        GithubRepoCardComponent,
        ProjectsComponent,
        EducationComponent,
        GithubCalendarComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    AnimateModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
