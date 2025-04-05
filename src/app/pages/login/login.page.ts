import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // Aquí pondrías tu lógica de autenticación real
    if (this.email && this.password) {
      this.router.navigate(['/start']);
    } else {
      alert('Please, fulfill the fields');
    }
  }
}
