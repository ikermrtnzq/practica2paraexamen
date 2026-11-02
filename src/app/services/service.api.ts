import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Equipos } from "../models/equipos";
import { firstValueFrom } from "rxjs";
import { Jugador } from "../models/jugador";
import { Apuesta } from "../models/apuesta";

@Injectable()
export class ServiceApi{
    url = environment.urlApi;

    constructor(
        private _http : HttpClient
    ){}

    async getEquipos(): Promise<Equipos[]>{
        let endpoint = "api/equipos";
        return firstValueFrom(
            this._http.get<Equipos[]>(this.url + endpoint)
        )
    }
    async getEquipo(id : number): Promise<Equipos>{
        let endpoint = "api/equipos/"+id;
        return firstValueFrom(
            this._http.get<Equipos>(this.url + endpoint)
        )
    }
    async getJugadores(idEquipo : number): Promise<Jugador[]>{
        let endpoint = "api/jugadores/jugadoresequipos/"+idEquipo;
        return firstValueFrom(
            this._http.get<Jugador[]>(this.url + endpoint)
        )
    }
    async getJugador(idJugador : number): Promise<Jugador>{
        let endpoint = "api/jugadores/"+idJugador;
        return firstValueFrom(
            this._http.get<Jugador>(this.url + endpoint)
        )
    }  
    async getApuestas(): Promise<Apuesta[]>{
        let endpoint = "api/apuestas";
        return firstValueFrom(
            this._http.get<Apuesta[]>(this.url + endpoint)
        )
    }  
    async deleteApuesta(id : number): Promise<void>{
        let endpoint = "api/apuestas/" +id;
        await firstValueFrom( this._http.delete(this.url + endpoint))
    }  
    async createApuesta(apuesta : Apuesta): Promise<any>{
        let endpoint = "api/apuestas";
        console.log(apuesta)
        let json = JSON.stringify(apuesta);
        let header = new HttpHeaders().set("content-type","application/json");
        return firstValueFrom(
            this._http.post(this.url + endpoint, json, {headers : header})
        )
    }

}