import { Component } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-attedance',
  standalone: false,
  templateUrl: './attedance.component.html',
  styleUrl: './attedance.component.scss'
})
export class AttedanceComponent {
  attendanceForm: FormGroup;
  attendanceDate: string = '';
  students: any[] = [];
  selectedStudent: any = '';
  attendanceRecord = { date: '', studentId: '' };


  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.attendanceForm = this.fb.group({
      attendanceDate: [''],
      selectedStudent: [''],
    });
  }

  ngOnInit() {
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
  }

  markAttendance() {
    if (this.attendanceForm.valid) {
      const attendanceRecord = {
        date: this.attendanceForm.value.attendanceDate,
        studentId: this.attendanceForm.value.selectedStudent,
      };
      this.studentService.markAttendance(this.attendanceRecord);
      alert('Attendance marked!');
    }
  }
}