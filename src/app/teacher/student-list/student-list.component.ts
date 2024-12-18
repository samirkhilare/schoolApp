import { Component } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: false,
  
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  students: any[] = [];
  filteredStudents: any[] = [];
  searchTerm: string = '';

  constructor(private studentService: StudentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.students;
    this.filteredStudents = [...this.students];
  }

  ngOnChanges(): void {
    this.filterStudents();
  }

  filterStudents(): void {
    if (this.searchTerm) {
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredStudents = [...this.students];
    }
  }

}
