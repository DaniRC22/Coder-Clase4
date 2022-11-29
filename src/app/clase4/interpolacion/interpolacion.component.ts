import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public personas = ['Juan', 'Daniel', 'Roro', 'Puma','Liber','Rei'] 
  public bandera = false;
  public valorSwitch: string;
  public hoy = new Date()
  constructor() { }

  ngOnInit(): void {

  }
decirHola(): void{
  alert('Holaa');
}
verDatos() {
  console.log('Nombre: ', this.nombre);
  console.log('Apellido: ', this.apellido);
}

cargarDatos() {
  this.nombre = "Lionel";
  this.apellido = "Messi";
}

}
