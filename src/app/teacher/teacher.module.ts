import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentModalComponent } from './student-modal/student-modal.component';


@NgModule({
  declarations: [
    TeacherDashboardComponent,
    StudentListComponent,
    StudentProfileComponent,
    StudentModalComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule
  ]
})
export class TeacherModule { }
