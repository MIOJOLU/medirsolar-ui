import { Component, OnInit } from '@angular/core';
import {Medicao} from '../../shared/models/medicao';
import {faTemperatureHalf} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medicao',
  templateUrl: './medicao.component.html',
  styleUrls: ['./medicao.component.scss']
})
export class MedicaoComponent implements OnInit {
  medicao: Medicao = new Medicao(0, 32, 10, new Date(), 'Cidade Nova');
  faTemperatureHalf = faTemperatureHalf;
  constructor() { }

  ngOnInit(): void {
  }

}
