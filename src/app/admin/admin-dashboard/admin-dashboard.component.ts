// admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: false
})
export class AdminDashboardComponent implements OnInit {
  addTeacherForm: FormGroup;
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.addTeacherForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      password: ['', Validators.required],
      active: [true],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.adminService.getAllUsers();
    this.filteredUsers = [...this.users];
  }
  

  filterUsers(): void {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = [...this.users];
    }
  }
  

  addTeacher(): void {
    if (this.addTeacherForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    const newTeacher = {
      ...this.addTeacherForm.value,
      role: 'teacher',
      id: Date.now(),
    };
    this.adminService.addTeacher(newTeacher);
    alert('Teacher added successfully!');
    this.addTeacherForm.reset();
    this.loadUsers();
  }

  toggleStatus(user: any): void {
    user.active = !user.active;
    this.adminService.updateUser(user);
    alert('User status updated.');
  }

  deleteUser(id: number): void {
    this.adminService.deleteUser(id);
    alert('User deleted successfully!');
    this.loadUsers();
  }
}
