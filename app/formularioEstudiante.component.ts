import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector:'formularioEstudiante',
    templateUrl: './app/formularioEstudiante.component.html',
    styles:[`input.ng-invalid.ng-touched {
        border-left: 3px solid red;
        border-right: 3px solid red;
     } 
     
     input.ng-valid.ng-touched {
        border-left: 3px solid green;
        border-right: 3px solid green;
     }`]
})

export class FormularioEstudiante {
    estudiante = {nombres:'Jhonnier Sanchez', apellidos:'Sanchez Dorado', edad:'33', correo:'jhonnier.sanchez@gmail.com', semestre:'10'}
    enviarFormulario(formulario:NgForm){
        console.log(this.estudiante);
       //console.log("Nombre: "+formulario.controls["nombre"].value);


    }

}