import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceApi } from '../../services/service.api';

@Component({
  selector: 'app-jugadores-equipo-component',
  standalone: false,
  styleUrl: './jugadores-equipo-component.css',
  templateUrl: './jugadores-equipo-component.html',
})
export class JugadoresEquipoComponent implements OnInit {
  public jugadores! : Array<Jugador>
  public id! :number
  constructor(
    private _activateRoute : ActivatedRoute,
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi
  ){}

  async ngOnInit(): Promise<void> {
    this._activateRoute.params.subscribe(async(params : Params)=> {
      this.id = parseInt(params['id']);
      this.jugadores = await this._service.getJugadores(this.id);
      this._cdr.detectChanges();
    })
    
  }
}
