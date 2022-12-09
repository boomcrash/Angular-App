import { Component } from '@angular/core';
import {Persona} from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First-App';
  deshabilitado = true;
  porcentaje=69;

  objeto={
    nombre:"Juan",
    edad:18
  }

  deshabilitar=true;
  ejecutarClick(){
    console.log("Click ejecutado");
    this.deshabilitar= !this.deshabilitar;  // false si esta habilitado true si esta deshabilitado
  }

  incrementarEdad(){
    this.objeto.edad++;
  }

  scrollear(event:Event){
    const element=event.target as HTMLDivElement;
    console.log(element.scrollTop);
  }

  levantarTecla(event:Event){
    const element=event.target as HTMLInputElement;
    element.value=element.value.toUpperCase();
  }
  //arreglos para *ngFor
  miArregloString:String[]=["Jorge","Pedro","Maria"]
  miArregloNumber:Number[]=[12,13,14,15]
  miArregloBoolean:Boolean[]=[true,false,true]
  miArregloObjeto:any[]=[{nombre:"Juan", edad:18,imagen:"https://th.bing.com/th/id/R.bc389449471f8919170595a05dc624c5?rik=WQ51sUYM%2fIHR4Q&pid=ImgRaw&r=0"},{nombre:"Pedro", edad:19,imagen:"https://th.bing.com/th/id/OIP.MRgA_G_-0bmJDjuNB6TVtgHaE8?pid=ImgDet&w=768&h=512&rs=1"},{nombre:"Maria", edad:20,imagen:"https://th.bing.com/th/id/R.a72eb52040b12f4e809037d18562430e?rik=IGi9xAFyiypygQ&riu=http%3a%2f%2fnuevaestetica.com%2fsites%2fdefault%2ffiles%2foptimistasface.jpg&ehk=AlmlxiQ4WvaCuzvB6jLrYc4Rs%2fCKvHKJLNTqWA1%2f81c%3d&risl=&pid=ImgRaw&r=0"}]
  miArregloMixto:any[]=["Jorge",12,true,{nombre:"Juan", edad:18}]

  arreglo_vacio:String[]=[];
  nombre:string="";
  addElemento(){
    this.arreglo_vacio.push(this.nombre);
    this.nombre=""
  }
  delElemento(index:number){
    this.arreglo_vacio.splice(index,1);
  }
  
  // llamamos interfaz persona
  miArregloPersona:Persona[]=[{nombre:"Juan", edad:18,imagen:"https://th.bing.com/th/id/R.bc389449471f8919170595a05dc624c5?rik=WQ51sUYM%2fIHR4Q&pid=ImgRaw&r=0"},{nombre:"Pedro", edad:19,imagen:"https://th.bing.com/th/id/OIP.MRgA_G_-0bmJDjuNB6TVtgHaE8?pid=ImgDet&w=768&h=512&rs=1"},{nombre:"Maria", edad:20,imagen:"https://th.bing.com/th/id/R.a72eb52040b12f4e809037d18562430e?rik=IGi9xAFyiypygQ&riu=http%3a%2f%2fnuevaestetica.com%2fsites%2fdefault%2ffiles%2foptimistasface.jpg&ehk=AlmlxiQ4WvaCuzvB6jLrYc4Rs%2fCKvHKJLNTqWA1%2f81c%3d&risl=&pid=ImgRaw&r=0"}]

 img_width:number=100;
 img_src:string="https://th.bing.com/th/id/R.bc389449471f8919170595a05dc624c5?rik=WQ51sUYM%2fIHR4Q&pid=ImgRaw&r=0";

 parrafo_background="white";
 parrafo_color="red";
 parrafo_size="60";
 


 usuario={
    nombre:"",
    correo:"",
    contrasena:""
 }

 registrar(){
    this.usuario.nombre="";
    this.usuario.correo="";
    this.usuario.contrasena="";
    alert("Usuario registrado");
  }
}
