import {Component} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
    selector: 'formularioexp',
    templateUrl:'./app/formularioexp.component.html',
    styles:[`input.ng-invalid {
        border-left: 3px solid red;
        border-right: 3px solid red;
     } 
     
     input.ng-valid {
        border-left: 3px solid green;
        border-right: 3px solid green;
     }`]
})

export class FormularioexpComponent{
        //inicializar formulario
        formulario: FormGroup;
        constructor(){
              this.formulario=new FormGroup({
                    nombre: new FormControl('Jhonnier',Validators.required),
                    correo: new FormControl('jhonnier@gmail.com',[Validators.required, 
                                                                Validators.pattern('^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$'),
                                                                this.elCorreoNoEsUnico],
                                                                this.elCorreoNoEsUnicoAsync),
                    numPrimo: new FormControl('3',[Validators.required], this.esNumeroPrimoAsync)
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

        //Validacion asincrona numero primo
        esNumeroPrimoAsync(control: FormControl){
            return new Promise((resolver, rechazar) =>
            {
               setTimeout(function(){
                    var numPrimo = control.value;
                    let a = 0; 
                    for(let i = 1; i<(numPrimo + 1); i++){
                        if(numPrimo%i==0){
                            a++;
                           }
                        }
                        if(a > 2){
                             console.log("No es Primo");
                             resolver ( {esNumeroPrimoAsync:true});
                           
                           }else{
                             console.log("Si es Primo");
                             resolver (null);
                        }
                    }, 10);
               });
            }


        //Validacion personal
        elCorreoNoEsUnicoAsync(control: FormControl){
            //antes de que se vaya al codigo declaramos la promesa que nos permite hacer un llamado asincronico para reesolver o rechazar
            //una peticion, entra a la funcion setTimeout y luego de 2 segundos ejecuta el codigo
            return new Promise((resolver, rechazar) =>
            {
               setTimeout(function(){
                    var correos: string[] = ['jhonnier@gmail.com','susana@gmail.com'];
                    if(correos.indexOf(control.value)!=-1){
                        resolver ( {elCorreoNoEsUnicoAsync:true});
                    }
                    resolver (null);
               }, 2000);
            
            });
        }
}