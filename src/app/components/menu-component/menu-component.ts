import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceAuth } from '../../services/service.auth';
import { Router } from '@angular/router';
import { ServiceApi } from '../../services/service.api';
import { Equipos } from '../../models/equipos';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  private _serviceAuth : ServiceAuth = inject(ServiceAuth)
  private usuario = this._serviceAuth.usuario;
  public equipos! : Array<Equipos>
  @ViewChild("selectEquipo") selectEquipo! : ElementRef;

  
  constructor(
    private _service : ServiceApi,
    private _cdr : ChangeDetectorRef,
    private _router : Router
  ){}

  buscar() : void {
    let equipo =parseInt(this.selectEquipo.nativeElement.value);
    this._router.navigate(["/equipo",equipo]);

  }
  async ngOnInit(): Promise<void> {
    this.equipos = await this._service.getEquipos();
    this._cdr.detectChanges()
  }
  logout() : void{
    this._serviceAuth.logout;
    this._router.navigate(["/"])
  }
}
