import { NgModule } from "@angular/core";
import { PruebaComponent } from "./prueba.component";   
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        PruebaComponent
    ],
    exports:[
        PruebaComponent
    ],
    imports:[
        CommonModule
    ]
})

export class PruebaModule{
    
}