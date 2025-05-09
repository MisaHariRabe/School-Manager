import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

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
    } else {
      alert("Tous les champs sont requis.");
    }
  }
}
