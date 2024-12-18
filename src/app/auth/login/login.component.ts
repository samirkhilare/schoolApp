import { Component } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [Validators.required]], // Password required validation
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      alert('Please enter valid credentials.');
      return;
    }
  
    const { email, password } = this.loginForm.value;
    const students = this.studentService.getStudents();
    console.log('Students:', students); // Debugging output
  
    const user = students.find(
      (s) => s.email === email && s.password === password
    );
    console.log('User Found:', user); // Debugging output
  
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.navigateBasedOnRole(user.role);
    } else {
      alert('Invalid credentials!');
    }
  }
  
  
  navigateBasedOnRole(role: string): void {
    if (role === 'student') {
      this.router.navigate(['/student']);
    } else if (role === 'teacher') {
      this.router.navigate(['/teacher']);
    } else if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      alert('Invalid role detected!');
    }
  }
  
  
}
