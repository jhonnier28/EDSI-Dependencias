import {Component} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
    selector: 'formularioexp',
    templateUrl:'./app/formularioexp.component.html',
    styles:[`input.ng-invalid.ng-touched {
        border-left: 3px solid red;
        border-right: 3px solid red;
     } 
     
     input.ng-valid.ng-touched {
        border-left: 3px solid green;
        border-right: 3px solid green;
     }`]
})

export class FormularioexpComponent{
        //inicializar formulario
        formulario: FormGroup;
        constructor(){
              this.formulario=new FormGroup({
                    nombre: new FormControl('Jaime',Validators.required),
                    correo: new FormControl('jhonnier.sanchez',[Validators.required, 
                                                                Validators.pattern('^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$'),
                                                                this.elCorreoNoEsUnico])
              })  
        }

        enviarDatos(){
            console.log(this.formulario);
        }


        //Validacion personal
        elCorreoNoEsUnico(control: FormControl): {[s:string]:Boolean}{
                var correos: string[] = ['jhonnier@gmail.com','susana@gmail.com'];
                if(correos.indexOf(control.value)!=-1){
                    return {elCorreoNoEsUnico:true}
                }
            return null;
        }
}