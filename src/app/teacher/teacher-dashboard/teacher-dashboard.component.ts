  import { Component } from '@angular/core';
  import { StudentService } from '../../core/services/student.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-teacher-dashboard',
    standalone: false,
    
    templateUrl: './teacher-dashboard.component.html',
    styleUrl: './teacher-dashboard.component.scss'
  })
  export class TeacherDashboardComponent {
    teacher: any = {};
    attendanceHistory: any[] = [];
    filteredAttendance: any[] = [];
    startDate: string = '';
    endDate: string = '';
    students: any;
    filteredStudents: any[] = [];
    searchTerm: string = '';
    selectedStudent: any;
    showModal: boolean = false;

    constructor(private teacherService: StudentService,
      private router: Router,
    ) {}

    ngOnInit(): void {
  
      this.teacher = JSON.parse(localStorage.getItem('currentUser') || '{}');
      
   
      this.attendanceHistory = this.teacherService.getAttendance();

      this.filteredAttendance = [...this.attendanceHistory];

      this.students = this.teacherService.students;
      this.filteredStudents = [...this.students];
    }

    filterAttendance(): void {
      if (this.startDate && this.endDate) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);

        this.filteredAttendance = this.attendanceHistory.filter((record) => {
          const recordDate = new Date(record.date);
          return recordDate >= start && recordDate <= end;
        });
      } else {

        this.filteredAttendance = [...this.attendanceHistory];
      }
    }

    onSearchChange(): void {
      const trimmedSearchTerm = this.searchTerm.trim().toLowerCase();
      if (trimmedSearchTerm) {
        this.filteredStudents = this.students.filter((student: { name: string; email: string; }) => 
          student.name.toLowerCase().includes(trimmedSearchTerm) || 
          student.email.toLowerCase().includes(trimmedSearchTerm)
        );
      } else {
        this.filteredStudents = [...this.students];
      }
    }

    viewStudents(): void {
      this.router.navigate(['/student-list']);
      
    }
    

    openModal(student: any): void {
      this.selectedStudent = student;
      this.showModal = true;
    }
  

    closeModal(): void {
      this.showModal = false;
    }

  }
