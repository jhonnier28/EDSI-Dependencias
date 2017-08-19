import {Component} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
    selector: 'formularioexp',
    templateUrl:'./app/formularioexp.component.html',
})

export class FormularioexpComponent{
        //inicializar formulario
        formulario: FormGroup;
        constructor(){
              this.formulario=new FormGroup({
                    nombre: new FormControl('Jaime',Validators.required),
                    correo: new FormControl('jhonnier.sanchez',Validators.required)
              })  
        }


        enviarDatos(){
            console.log(this.formulario);

        }

}