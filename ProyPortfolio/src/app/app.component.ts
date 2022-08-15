import { Component } from '@angular/core';
import { Exp_Educ } from './Componentes/experiencia-y-educacion/Exp_Educ';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyPortfolio';

  /* public onOpenModal(ExpEd: Exp_Educ, mode: String): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExpEdModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateExpEdModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteExpEdModal');
    }
    if (mode === 'logIn') {
      button.setAttribute('data-target', '#logInModal');
    }
    container.appendChild(button);
    button.click();
  } */

}
