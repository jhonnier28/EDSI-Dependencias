import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'formulario',
    templateUrl:'./app/formulario.component.html',
    styles:[`input.ng-invalid.ng-touched {
                border-left: 3px solid red;
                border-right: 3px solid red;
             } 
             
             input.ng-valid.ng-touched {
                border-left: 3px solid green;
                border-right: 3px solid green;
             }`]
})

export class FormularioComponent{
    estudiante = {nombre:'Jaime', correo:'jaime@gmail.com'}
    enviarFormulario(formulario:NgForm){
        console.log(this.estudiante);
       //console.log("Nombre: "+formulario.controls["nombre"].value);


    }

}