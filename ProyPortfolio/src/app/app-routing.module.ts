import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './Componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';


const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
