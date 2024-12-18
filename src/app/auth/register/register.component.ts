import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../core/services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:false
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    // Define the form structure including the role field
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student', [Validators.required]], // Role selection, default is 'student'
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      // Pass the user data to the registration service
      this.studentService.registerStudent(userData);
      
      alert('Registration Successful!');
      this.router.navigate(['/auth/login']);
    }
  }
}