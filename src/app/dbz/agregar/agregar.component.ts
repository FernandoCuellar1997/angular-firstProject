import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevoPersonaje:Personaje={
    nombre:"",
    poder:0,
  }

  constructor(private dbzServices:DbzService){

  }
  //@Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length===0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbzServices.agregarPersonaje(this.nuevoPersonaje);
    this.nuevoPersonaje={
      nombre:"",
      poder:0
    }
    
  }

  eliminar(){
    console.log(this.dbzServices.personajes.length);
    if(this.dbzServices.personajes.length===0){
      return;
    }
    this.dbzServices.eliminarPersonaje();
  }

}
