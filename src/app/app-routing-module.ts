import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth-guard';
import { DetalleEquipoComponent } from './components/detalle-equipo-component/detalle-equipo-component';
import { JugadoresEquipoComponent } from './components/jugadores-equipo-component/jugadores-equipo-component';
import { ApuestasComponent } from './components/apuestas-component/apuestas-component';
import { CrearApuestasComponent } from './components/crear-apuestas-component/crear-apuestas-component';
import { BorrarComponent } from './components/borrar-component/borrar-component';
import { DetalleJugadorComponent } from './components/detalle-jugador-component/detalle-jugador-component';

const routes: Routes = [
  {path: "" , component : LoginComponent, },
  {path: "home" , component : HomeComponent, canActivate:[AuthGuard]},
  {path: "equipo/:id" , component : DetalleEquipoComponent, canActivate:[AuthGuard]},
  {path: "jugadores/:id" , component : JugadoresEquipoComponent, canActivate:[AuthGuard]},
  {path: "apuestas" , component : ApuestasComponent, canActivate:[AuthGuard]},
  {path: "apuestas/crear" , component : CrearApuestasComponent, canActivate:[AuthGuard]},
  {path: "apuestas/borrar/:id" , component : BorrarComponent, canActivate:[AuthGuard]},
  {path: "jugador/:id" , component : DetalleJugadorComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
