import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('addBtn') addButtonRef!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    if (this.isOnSmallScreen()) {
      this.addButtonRef.nativeElement.innerHTML = "+";
    }
  }

  student = {
    picture: '',
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    classe: 'CE1'
  };

  students: { picture: string; nom: string; prenom: string; dateDeNaissance: string; classe: string; }[] = [];

  isFormValid() {
    return this.student.picture && this.student.nom && this.student.prenom && this.student.dateDeNaissance && this.student.classe
  }

  title = 'school-manager';

  isOnSmallScreen() {
    return window.screen.availWidth < 600;
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.students.push(this.student);
      this.student = {
        picture: '',
        nom: '',
        prenom: '',
        dateDeNaissance: '',
        classe: 'CE1'
      };
      this.closeModal('addStudentModal');
    } else {
      alert("Tous les champs sont requis.");
    }
  }

  isModalOpen(modalId: string) {
    if (!modalId.trim()) return false;

    return document.getElementById(modalId)?.style.display != "none";
  }

  openModal(modalId: string) {
    if (!modalId.trim()) return;

    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
    }
  }

  closeModal(modalId: string) {
    if (!modalId.trim()) return;

    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    }
  }
}
