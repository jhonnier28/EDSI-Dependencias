import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';
import { FormularioEstudiante } from './formularioEstudiante.component';
import { FormularioexpComponent } from './formularioexp.component'
import { AppComponent }  from './app.component';

@NgModule({
  imports:[BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ FormularioexpComponent, AppComponent, FormularioComponent, FormularioEstudiante ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
