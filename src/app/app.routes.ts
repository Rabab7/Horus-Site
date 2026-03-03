import { Routes } from '@angular/router';
import { CourseDetails } from './components/courses/coursesDetail/course-details/course-details';
import { Courses } from './components/courses/courses/courses';
import { Instructors } from './components/instructors/instructors/instructors';
import { Footer } from './components/Footer/footer/footer';
import { Home } from './components/home/home/home';
import { LandingPage } from './components/landingPage/landing-page/landing-page';

export const routes: Routes = [
    { path: '', component: LandingPage, title: 'أكاديمية حورس | الرئيسية' }, 
    { path: 'course-details', component: CourseDetails, title: 'تفاصيل الكورس' },
    { path: '**', redirectTo: '' }
];
