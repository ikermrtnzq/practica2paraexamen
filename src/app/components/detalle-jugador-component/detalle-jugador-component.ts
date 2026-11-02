import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceApi } from '../../services/service.api';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-detalle-jugador-component',
  standalone: false,
  styleUrl: './detalle-jugador-component.css',
  templateUrl: './detalle-jugador-component.html',
})
export class DetalleJugadorComponent implements OnInit{
  public jugador! : Jugador
  constructor(
    private _activateRoute : ActivatedRoute,
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi
  ){}
  async ngOnInit(): Promise<void> {
    this._activateRoute.params.subscribe(async(params : Params) => {
      let id = parseInt(params['id']);
      this.jugador = await this._service.getJugador(id);
      this._cdr.detectChanges();
      console.log(this.jugador)
      console.log("holaaa")
    })
  }
}
