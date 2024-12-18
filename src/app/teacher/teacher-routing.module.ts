import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'',component:TeacherDashboardComponent},
  {path:'teacher-dashboard',component:TeacherDashboardComponent},
  { path: 'student-list', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
