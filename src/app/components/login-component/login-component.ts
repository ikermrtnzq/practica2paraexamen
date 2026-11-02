import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { ServiceAuth } from '../../services/service.auth';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajanombre") cajaNombre! : ElementRef;
  @ViewChild("cajapwd") cajaPwd! : ElementRef
  private serviceAuth :ServiceAuth = inject(ServiceAuth)

  constructor(
    private _service : ServiceEmpleados,
    private _router : Router
  ){}
  async login(): Promise<void>{
    let nombre = this.cajaNombre.nativeElement.value;
    let pwd = this.cajaPwd.nativeElement.value;

    let credenciales = {
      userName : nombre,
      password : pwd
    }

    let response = await this._service.loginAsync(credenciales);
    this.serviceAuth.loginAsync(response.response)
    this._router.navigate(["/home"])
  }

}
