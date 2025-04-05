import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})

export class StartPage {

  constructor(private router: Router) { }

  action(num: number) {
      switch (num) {
        case 1:
          // abrir hoja de cálculo
          break;
        case 2:
          // otra acción
          break;
        // ...
      }
    }

}
