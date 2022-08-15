import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Exp_EducService } from 'src/app/Servicios/experiencia-y-educacion.Service';
import { Exp_Educ } from './Exp_Educ';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  public expEds: Exp_Educ[];
  
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

}
