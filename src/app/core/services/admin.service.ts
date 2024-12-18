import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private storageKey = 'students'; 

  constructor() { }

  getAllUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addTeacher(user: any): void {
    const users = this.getAllUsers();
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    user.active = true; 
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(updatedUser: any): void {
    const users = this.getAllUsers();
    const userIndex = users.findIndex(user => user.id === updatedUser.id);

    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    } else {
      console.error(`User with ID ${updatedUser.id} not found.`);
    }
  }


  deleteUser(userId: number): void {
    let users = this.getAllUsers();
    users = users.filter(user => user.id !== userId);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  toggleUserStatus(userId: number): void {
    const users = this.getAllUsers();
    const user = users.find(user => user.id === userId);

    if (user) {
      user.active = !user.active;
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    } else {
      console.error(`User with ID ${userId} not found.`);
    }
  }

  changePassword(adminId: number, newPassword: string): void {
    const users = this.getAllUsers();
    const admin = users.find(user => user.id === adminId && user.role === 'admin');

    if (admin) {
      admin.password = newPassword;
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    } else {
      console.error(`Admin with ID ${adminId} not found.`);
    }
  }
}
