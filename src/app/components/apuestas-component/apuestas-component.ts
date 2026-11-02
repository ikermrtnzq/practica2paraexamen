import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apuesta } from '../../models/apuesta';
import { ActivatedRoute } from '@angular/router';
import { ServiceApi } from '../../services/service.api';

@Component({
  selector: 'app-apuestas-component',
  standalone: false,
  styleUrl: './apuestas-component.css',
  templateUrl: './apuestas-component.html',
})
export class ApuestasComponent implements OnInit{
  public apuestas! : Array<Apuesta>;
  constructor(
    private _activateRoute : ActivatedRoute,
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi
  ){}
  async delete(id : number) {
    await this._service.deleteApuesta(id);
    this.apuestas = await this._service.getApuestas();
    this._cdr.detectChanges();
  }
  async ngOnInit(): Promise<void> {
    this.apuestas = await this._service.getApuestas();
    this._cdr.detectChanges()
  }

}
