import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './Componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './Componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './Componentes/logros/logros.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './Componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    AptitudesComponent,
    LogrosComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
