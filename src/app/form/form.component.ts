import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  nombre:string;
  @Input()
  correo:string;
  @Input()
  telefono:string;
  @Input()
  msn:string;

  datos: Array<Datos> = [];
   constructor() { }

  ngOnInit() {}
  
  
   SendInfo(): void{
     this.datos.push(new Datos(this.nombre, this.correo, this.telefono, this.msn));
    alert("Datos insertados");
  }

 
 }

class Datos {
    nombre:string;
    correo:string;
    telefono:string;
    msn:string;
    constructor( nombre:string, correo:string, telefono:string, msn:string ){
      this.nombre = nombre;
      this.correo = correo;
      this.telefono = telefono;
      this.msn = msn;
    }
  }



  

