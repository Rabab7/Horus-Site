import { Component } from '@angular/core';
import { Home } from "../../home/home/home";
import { Courses } from "../../courses/courses/courses";
import { Instructors } from "../../instructors/instructors/instructors";
import { AboutGoals } from "../../about/about-goals/about-goals";
import { CourseDetails } from "../../courses/coursesDetail/course-details/course-details";
import { RouterOutlet } from '@angular/router';
import { Partnership } from "../../partnership/partnership";


@Component({
  selector: 'app-landing-page',
  imports: [Home, Instructors, AboutGoals, Courses, Partnership],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
