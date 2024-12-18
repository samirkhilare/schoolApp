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
    // Fetch the logged-in student's data from localStorage
    this.student = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log('student data :',this.student)
    // Fetch attendance history from localStorage (if exists)
    this.attendanceHistory = JSON.parse(localStorage.getItem('attendanceHistory') || '[]');
    
    // Check if attendance for today has already been marked
    this.checkAttendanceForToday();
  }

  // Check if attendance is already marked for today
  checkAttendanceForToday(): void {
    const currentDate = new Date().toLocaleDateString(); // Get the current date
    this.attendanceMarkedToday = this.attendanceHistory.some(
      (record) => record.date === currentDate
    );
  }

  // Mark attendance
  markAttendance(): void {
    const currentDate = new Date().toLocaleDateString(); // Get the current date
    
    // If attendance has already been marked today, prevent further action
    if (this.attendanceMarkedToday) {
      alert('Attendance for today has already been marked.');
      return;
    }

    const attendanceRecord = {
      date: currentDate,
      studentName:this.student.name,
      status: 'Present' // You can toggle this to 'Absent' or make it dynamic
    };

    // Add the new attendance record to the history
    this.attendanceHistory.push(attendanceRecord);

    // Save the updated attendance history to localStorage
    localStorage.setItem('attendanceHistory', JSON.stringify(this.attendanceHistory));

    // Update the attendance status for today
    this.attendanceMarkedToday = true;

    // Optionally, display a success message or alert
    alert('Attendance marked successfully!');
  }

  // Update profile functionality (if needed)
  updateProfile(): void {
    // Implement profile update logic here (e.g., navigate to a profile update page)
    this.router.navigate(['student/profile']);
  }
}