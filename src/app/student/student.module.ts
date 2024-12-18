import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AttedanceComponent } from './attedance/attedance.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StudentDashboardComponent,
    AttedanceComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,SharedModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class StudentModule { }
