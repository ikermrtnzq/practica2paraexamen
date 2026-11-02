import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceApi } from '../../services/service.api';
import { Router } from '@angular/router';
import { Apuesta } from '../../models/apuesta';

@Component({
  selector: 'app-crear-apuestas-component',
  standalone: false,
  styleUrl: './crear-apuestas-component.css',
  templateUrl: './crear-apuestas-component.html',
})
export class CrearApuestasComponent {
  @ViewChild("cajaid") cajaId! : ElementRef;
  @ViewChild("cajausuario") cajausuario! : ElementRef;
  @ViewChild("cajaresultado") cajaresultado! : ElementRef;
  @ViewChild("cajafecha") cajafecha! : ElementRef;

  constructor(
    private _cdr : ChangeDetectorRef,
    private _service : ServiceApi,
    private _router: Router
  ){}

  async insertarApuesta(): Promise<void>{
    let id = parseInt(this.cajaId.nativeElement.value);
    let usuario = this.cajausuario.nativeElement.value;
    let resultado = this.cajaresultado.nativeElement.value;
    let fecha = this.cajafecha.nativeElement.value;
    let apuesta = new Apuesta(id,usuario,resultado,fecha);
    await this._service.createApuesta(apuesta)
    this._router.navigate(["/apuestas"])
  }

}
