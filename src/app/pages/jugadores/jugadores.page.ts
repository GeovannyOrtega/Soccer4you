import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  lista:Array<any>=[
    {
      nombre:"Juan Luis",
      apellidoPaterno:"Lopez",
      apellidoMaterno:"Sanchez",
      fechaNacimiento:"01/02/2000",
    },
    {
      nombre:"Juan Luis",
      apellidoPaterno:"Lopez",
      apellidoMaterno:"Sanchez",
      fechaNacimiento:"01/02/2000",
    },
    {
      nombre:"Juan Luis",
      apellidoPaterno:"Lopez",
      apellidoMaterno:"Sanchez",
      fechaNacimiento:"01/02/2000",
    },
    {
      nombre:"Juan Luis",
      apellidoPaterno:"Lopez",
      apellidoMaterno:"Sanchez",
      fechaNacimiento:"01/02/2000",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
