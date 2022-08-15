import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exp_Educ } from "../Componentes/experiencia-y-educacion/Exp_Educ";

@Injectable({
   providedIn: 'root'
})

export class Exp_EducService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public verExp_Educs(): Observable<Exp_Educ[]>{
        return this.http.get<Exp_Educ[]>(`${this.apiServerUrl}/exp_educ/ver`);
    }

    public agregarExp_Educ(expEd: Exp_Educ): Observable<Exp_Educ>{
        return this.http.post<Exp_Educ>(`${this.apiServerUrl}/exp_educ/nuevo`,expEd);
    }

    public actualizarExp_Educ(expEd: Exp_Educ): Observable<Exp_Educ>{
        return this.http.put<Exp_Educ>(`${this.apiServerUrl}/exp_educ/actualizar`, expEd);
    }
    public borrarExp_Educ(expEdId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/exp_educ/borrar/${expEdId}`);
    }
    public buscarExp_Educ(expEdId: number): Observable<Exp_Educ>{
        return this.http.get<Exp_Educ>(`${this.apiServerUrl}/exp_educ/buscar/${expEdId}`);
    }


}