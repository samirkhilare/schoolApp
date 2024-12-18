import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-modal',
  standalone: false,
  
  templateUrl: './student-modal.component.html',
  styleUrl: './student-modal.component.scss'
})
export class StudentModalComponent {
  @Input() student: any;        // The student object to be displayed
  @Output() closeModal: EventEmitter<void> = new EventEmitter(); // Event to close the modal

  close() {
    this.closeModal.emit();  // Emit event to close modal
  }
}
