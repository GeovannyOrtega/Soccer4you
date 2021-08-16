import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPageRoutingModule } from '../login/login-routing.module';

@Component({
  selector: 'app-partjugados',
  templateUrl: './partjugados.page.html',
  styleUrls: ['./partjugados.page.scss'],
})
export class PartjugadosPage {
  partidosjugados: any[] = [
    {
      "fecha": "1/08/2021",
      "equipo": "Carbels Vs Flores Magon",
      "resultado": "2-1",
      "hora": "6:30"
    },
    {
      "fecha": "1/08/2021",
      "equipo": "Conchi Vs Urbis",
      "resultado": "0-3",
      "hora": "6:30"
    },
    {
      "fecha": "5/08/2021",
      "equipo": "Urbis Vs Flores Magon",
      "resultado": "0-0",
      "hora": "6:30"
    },
    {
      "fecha": "5/08/2021",
      "equipo": "Carbels Vs Conchi",
      "resultado": "1-1",
      "hora": "6:30"
    },
    {
      "fecha": "12/08/2021",
      "equipo": "Carbels Vs Urbis",
      "resultado": "2-0",
      "hora": "6:30"
      
    },
    {
      "fecha": "15/08/2021",
      "equipo": "Flores Magon Vs Conchi",
      "resultado": "1-1",
      "hora": "6:30"
    },
  ];

 

}
