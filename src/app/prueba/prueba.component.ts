import { Component } from "@angular/core";
import { app } from '../../../server';

@Component({
    selector:"./app-prueba",
    template:`
    <h1>{{titulo}}</h1>
    <ul>
        <li *ngFor="let nombre of nombres; let i=index">
            {{i+1}} - {{nombre}}
        </li>
    </ul>
    <div *ngIf="nombreEliminado!=='' else noBorrado">
        <strong>Ultimo nombre eliminado: </strong>
        <span>{{nombreEliminado}}
        </span>
    </div>
    <button (click)="eliminarNombre()">Eliminar Nombre</button>
    <h3 class="bt-2">Nombres Eliminados</h3>
    <div *ngIf="cant>=0">
        <ul>
            <li *ngFor="let nombre of nombresEliminados; let i=index">
                {{i+1}} - {{nombre}}
            </li>
        </ul>
    </div>
    <ng-template #noBorrado>
        <div>
        <strong>No se ha eliminado ningun nombre</strong></div>
    </ng-template>
    `
})

export class PruebaComponent{
    titulo:string="Titulo de prueba";
    nombres:string[]=["Luis","Fernando","Cuellar","Diana","Milena"];
    nombreEliminado:string=""
    nombresEliminados:string[]=[];
    cant:number=0;
    eliminarNombre(){
        this.nombreEliminado=this.nombres.shift()||"";
        this.nombresEliminados.push(this.nombreEliminado);
        this.cant=this.nombresEliminados.length;

    }
}