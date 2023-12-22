import { Component } from '@angular/core';
import { Event } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: './app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  
  nuevoPersonaje:Personaje={
    nombre:"Trunks",
    poder:13000
  }


  constructor(){
  }
}
