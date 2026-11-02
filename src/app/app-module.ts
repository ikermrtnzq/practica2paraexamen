import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { ServiceAuth } from './services/service.auth';
import { AuthGuard } from './guards/auth-guard';
import { ServiceApi } from './services/service.api';
import { DetalleEquipoComponent } from './components/detalle-equipo-component/detalle-equipo-component';
import { JugadoresEquipoComponent } from './components/jugadores-equipo-component/jugadores-equipo-component';
import { ApuestasComponent } from './components/apuestas-component/apuestas-component';
import { CrearApuestasComponent } from './components/crear-apuestas-component/crear-apuestas-component';
import { BorrarComponent } from './components/borrar-component/borrar-component';
import { DetalleJugadorComponent } from './components/detalle-jugador-component/detalle-jugador-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    DetalleEquipoComponent,
    JugadoresEquipoComponent,
    ApuestasComponent,
    CrearApuestasComponent,
    BorrarComponent,
    DetalleJugadorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceEmpleados,
    ServiceAuth,
    AuthGuard,
    ServiceApi,
  ],
  bootstrap: [App],
})
export class AppModule {}
