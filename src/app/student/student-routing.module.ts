import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AttedanceComponent } from './attedance/attedance.component';

const routes: Routes = [
  { path: '', component: StudentDashboardComponent },
  { path: 'dashboard', component: StudentDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'attendance', component: AttedanceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
