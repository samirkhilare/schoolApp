import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private storageKey = 'students';
  private attendanceKey = 'attendance';
  public students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      contact: '1234567890',
      role: 'student',
      password: 'student123',
      attendance: [
        { date: '2024-12-15', status: 'Present' },
        { date: '2024-12-16', status: 'Absent' },
        { date: '2024-12-17', status: 'Present' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      contact: '0987654321',
      role: 'teacher',
      password: 'teacher123',
      attendance: [] 
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      contact: '9876543210',
      role: 'student',
      password: 'student123',
      attendance: [
        { date: '2024-12-15', status: 'Absent' },
        { date: '2024-12-16', status: 'Present' },
        { date: '2024-12-17', status: 'Present' }
      ]
    },
    {
      id: 4,
      name: 'Bob Williams',
      email: 'bob@example.com',
      contact: '8765432109',
      role: 'student',
      password: 'student123',
      attendance: [
        { date: '2024-12-15', status: 'Present' },
        { date: '2024-12-16', status: 'Present' },
        { date: '2024-12-17', status: 'Absent' }
      ]
    },
    {
      id: 5,
      name: 'Admin User',
      email: 'admin@example.com',
      contact: '1231231234',
      role: 'admin',
      password: 'admin123',
      attendance: [] 
    }
  ];
  

  constructor() {}


  getUsers(): any[] {
    return this.students;
  }

  registerStudent(student: any): void {
    const students = this.getStudents();
    student.id = students.length + 1; 
    students.push(student);
    localStorage.setItem(this.storageKey, JSON.stringify(students));
  }

  getStudents(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  markAttendance(attendanceRecord: { date: string, studentId: string }) {
    let attendanceList = JSON.parse(localStorage.getItem('attendance') || '[]');
    attendanceList.push(attendanceRecord);
    localStorage.setItem('attendance', JSON.stringify(attendanceList));
  }

  getAttendance(): any[] {
    return JSON.parse(localStorage.getItem('attendanceHistory') || '[]');
  }
  

  updateProfile(student: any): void {
    const students = this.getStudents();
    const index = students.findIndex((s) => s.email === student.email);
    if (index !== -1) students[index] = student;
    localStorage.setItem(this.storageKey, JSON.stringify(students));
  }

  getStudentById(id: string | null) {
    if (!id) {
      return null;
    }
    return this.students.find(student => student.id.toString() === id) || null;
  }
}
