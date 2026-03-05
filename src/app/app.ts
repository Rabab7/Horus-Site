import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNav } from "./components/navbar/main-nav/main-nav/main-nav";
import { Footer } from "./components/Footer/footer/footer";
import { Courses } from "./components/courses/courses/courses";
import { Instructors } from "./components/instructors/instructors/instructors";
import { Home } from "./components/home/home/home";
import { AboutGoals } from "./components/about/about-goals/about-goals";
import { LandingPage } from "./components/landingPage/landing-page/landing-page";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MainNav, Footer,  RouterOutlet , NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Horus-Site');
  
  isVisible = false;

  // tracking browser scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    //  the icon to top appear after 400 px (after home sec)
    this.isVisible = window.scrollY > 400;
  }

  // the func to top to the home sec
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
}
