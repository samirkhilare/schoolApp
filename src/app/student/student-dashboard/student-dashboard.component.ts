import { Component } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone: false,
  
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  student: any = {};
  attendanceHistory: any[] = [];
  attendanceMarkedToday: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  
    this.student = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log('student data :',this.student)

    this.attendanceHistory = JSON.parse(localStorage.getItem('attendanceHistory') || '[]');

    this.checkAttendanceForToday();
  }

  checkAttendanceForToday(): void {
    const currentDate = new Date().toLocaleDateString(); 
    this.attendanceMarkedToday = this.attendanceHistory.some(
      (record) => record.date === currentDate
    );
  }

  markAttendance(): void {
    const currentDate = new Date().toLocaleDateString(); 
    
 
    if (this.attendanceMarkedToday) {
      alert('Attendance for today has already been marked.');
      return;
    }

    const attendanceRecord = {
      date: currentDate,
      studentName:this.student.name,
      status: 'Present' 
    };


    this.attendanceHistory.push(attendanceRecord);

    localStorage.setItem('attendanceHistory', JSON.stringify(this.attendanceHistory));


    this.attendanceMarkedToday = true;


    alert('Attendance marked successfully!');
  }

  updateProfile(): void {

    this.router.navigate(['student/profile']);
  }
}