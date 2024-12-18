import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../../core/services/student.service';
import { log } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false
})
export class ProfileComponent {
  profileForm: FormGroup;
  student: any = {};

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      contact: [''],
      password: [''], 
    });
  }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.student);
    
    this.profileForm.patchValue(this.student);
  }

  updateProfile() {
    this.studentService.updateProfile(this.profileForm.value);
    localStorage.setItem('currentUser', JSON.stringify(this.profileForm.value));
    alert('Profile Updated!');
  }
}
