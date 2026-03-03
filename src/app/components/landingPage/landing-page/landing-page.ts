import { Component } from '@angular/core';
import { Home } from "../../home/home/home";
import { Courses } from "../../courses/courses/courses";
import { Instructors } from "../../instructors/instructors/instructors";
import { AboutGoals } from "../../about/about-goals/about-goals";

@Component({
  selector: 'app-landing-page',
  imports: [Home, Courses, Instructors, AboutGoals],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
