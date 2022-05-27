import { Component, OnInit } from '@angular/core';
import {Medicao} from '../../shared/models/medicao';
import {faTemperatureHalf, faDroplet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medicao',
  templateUrl: './medicao.component.html',
  styleUrls: ['./medicao.component.scss']
})
export class MedicaoComponent implements OnInit {
  medicao: Medicao = new Medicao(0, 32, 10, new Date(), 'Cidade Nova');
  faTemperatureHalf = faTemperatureHalf;
  faDroplet = faDroplet;
  temperatureIndex = 'hot';
  imagesHot = ['./']

  constructor() { }

  ngOnInit(): void {
  }

  setTemperaturaIndex(){
    if (this.medicao.temperatura > 30 && this.medicao.temperatura < 37){
      this.temperatureIndex = 'hot';
    }else if (this.medicao.temperatura >= 37){
      this.temperatureIndex = 'extremelly-hot'
    }
  }

}
