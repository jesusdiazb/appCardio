import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosCardio } from 'src/app/models/datos-cardio';
import { ResultadostotalService } from 'src/app/resultadostotal.service';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';

@Component({
  selector: 'app-riesgo-cardio',
  templateUrl: './riesgo-cardio.component.html',
  styleUrls: ['./riesgo-cardio.component.css']
})
export class RiesgoCardioComponent implements OnInit {

  
  

  usoDatosCardio :DatosCardio = {

      //riesgo diabetes y cardio 

  perAbdominal: 0,
  tensionArterial:0,
  ejercicioDiario: '',

  consumoVerduras:  '',
  tieneHtensionArt:  '',

  tomaMedicamentos:  '',
  nivelAzucar:  '',
  familiarDiabetes: '',
  diabetico: '',
  fuma:  '',
  }

  constructor(private router : Router, private datosCardio:  ResultadostotalService) {

  }


  ngOnInit(): void {

    this.usoDatosCardio = this.datosCardio.datosCardio;


  }

  clickSiguiente(){
    this.router.navigate(['resultadoDiabetesCardio']);
  }


  

}
