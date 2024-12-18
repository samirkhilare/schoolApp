import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../core/services/student.service';

@Component({
  selector: 'app-student-profile',
  standalone: false,
  
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {
  student: any;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.student = this.studentService.getStudentById(studentId);
    }
    if (!this.student) {
      this.student = { name: 'Student not found', email: '', contact: '', attendanceStatus: '' };
    }
    
  }

}
