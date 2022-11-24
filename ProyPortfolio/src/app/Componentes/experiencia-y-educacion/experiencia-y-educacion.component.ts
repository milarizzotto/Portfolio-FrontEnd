import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exp_EducService } from 'src/app/Servicios/experiencia-y-educacion.Service';
import { Exp_Educ } from './Exp_Educ';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  public expEds: Exp_Educ[];
  public editexpEd: Exp_Educ;
  public deleteExpEd: Exp_Educ;
  public addexpEd: Exp_Educ;

  constructor(private expEdService: Exp_EducService){}

  ngOnInit() {
    this.verexpEds();
  }

  public verexpEds(): void {
    this.expEdService.verExp_Educs().subscribe(
      (response: Exp_Educ[]) => { 
        this.expEds = response;
        console.log(this.expEds);
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddExpEd (addForm: NgForm): void{
    document.getElementById('add-exped-form').click();
    this.expEdService.agregarExp_Educ(addForm.value).subscribe(
      (response: Exp_Educ) => {
        console.log(response);
        this.verexpEds();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onEditExpEd (expEd: Exp_Educ): void {
    this.expEdService.actualizarExp_Educ(expEd).subscribe(
      (response: Exp_Educ) => {
        console.log(response);
        this.verexpEds();
      },
      (error: HttpErrorResponse) => {alert(error.message);}
    );
  }

  public onDeleteExpEd (expEdId: number): void {
    this.expEdService.borrarExp_Educ(expEdId).subscribe(
      (response: void) => {
        console.log(response);
        this.verexpEds();
      },
      (error: HttpErrorResponse) => {alert(error.message);}
    );
  }

  public onOpenModal(expEd: Exp_Educ, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExpEdModal');
    }
    if (mode === 'edit') {
      this.editexpEd = expEd;
      button.setAttribute('data-target', '#actualizarExp_EdModal'); 
    }
    if (mode === 'delete') {
      this.deleteExpEd = expEd;
      button.setAttribute('data-target', '#deleteExp_EdModal'); 
    }
    if (mode === 'logIn') {
      button.setAttribute('data-target', '#logInModal');
    }
    container?.appendChild(button);
    button.click();
  } 

}
