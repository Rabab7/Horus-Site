import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  imports: [RouterLink],
  templateUrl: './all-courses.html',
  styleUrl: './all-courses.css',
})
export class AllCourses {

  ngOnInit() {
    // * as section opened the scroll move to top of sec
    window.scrollTo(0, 0);
  }

}
