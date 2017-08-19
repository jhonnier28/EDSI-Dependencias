"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FormularioEstudiante = (function () {
    function FormularioEstudiante() {
        this.estudiante = { nombres: 'Jhonnier Sanchez', apellidos: 'Sanchez Dorado', edad: '33', correo: 'jhonnier.sanchez@gmail.com', semestre: '10' };
    }
    FormularioEstudiante.prototype.enviarFormulario = function (formulario) {
        console.log(this.estudiante);
        //console.log("Nombre: "+formulario.controls["nombre"].value);
    };
    FormularioEstudiante = __decorate([
        core_1.Component({
            selector: 'formularioEstudiante',
            templateUrl: './app/formularioEstudiante.component.html',
            styles: ["input.ng-invalid.ng-touched {\n        border-left: 3px solid red;\n        border-right: 3px solid red;\n     } \n     \n     input.ng-valid.ng-touched {\n        border-left: 3px solid green;\n        border-right: 3px solid green;\n     }"]
        }), 
        __metadata('design:paramtypes', [])
    ], FormularioEstudiante);
    return FormularioEstudiante;
}());
exports.FormularioEstudiante = FormularioEstudiante;
//# sourceMappingURL=formularioEstudiante.component.js.map