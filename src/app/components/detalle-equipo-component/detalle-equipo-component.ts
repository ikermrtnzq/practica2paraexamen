import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceApi } from '../../services/service.api';
import { Equipos } from '../../models/equipos';

@Component({
  selector: 'app-detalle-equipo-component',
  standalone: false,
  styleUrl: './detalle-equipo-component.css',
  templateUrl: './detalle-equipo-component.html',
})
export class DetalleEquipoComponent implements OnInit{
  public equipo! : Equipos;
  constructor(
    private _activateRoute : ActivatedRoute,
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi
  ){}
  async ngOnInit(): Promise<void> {
    this._activateRoute.params.subscribe(async(params : Params)=>{
      let id = parseInt(params['id']);
      this.equipo = await this._service.getEquipo(id);
      this._cdr.detectChanges()
    })
  }
}
