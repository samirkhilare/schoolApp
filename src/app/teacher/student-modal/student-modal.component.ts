import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-modal',
  standalone: false,
  
  templateUrl: './student-modal.component.html',
  styleUrl: './student-modal.component.scss'
})
export class StudentModalComponent {
  @Input() student: any;       
  @Output() closeModal: EventEmitter<void> = new EventEmitter(); 

  close() {
    this.closeModal.emit();  
  }
}
