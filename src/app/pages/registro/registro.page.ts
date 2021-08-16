import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  obSubmin(formulario: NgForm){
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
