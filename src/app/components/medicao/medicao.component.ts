import { Component, OnInit } from '@angular/core';
import {Medicao} from '../../shared/models/medicao';
import {faTemperatureHalf, faDroplet, faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medicao',
  templateUrl: './medicao.component.html',
  styleUrls: ['./medicao.component.scss']
})
export class MedicaoComponent implements OnInit {
  medicao: Medicao = new Medicao(0, 0, 0, new Date(), 'Cidade Nova');
  faTemperatureHalf = faTemperatureHalf;
  faDroplet = faDroplet;
  faArrowsRotate = faArrowsRotate;
  temperatureIndex = 'hot';
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  image: string | undefined = 'assets/images/hot1.png';
  message = '';

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(unidade: string = "s") {
    this.http.get(`http://localhost:3000/getMaxMin?unidade=${unidade}`).toPromise().then((res: any) => {
      console.log(res)
      const atual = res.tempUmiAtual;
      this.medicao = new Medicao(atual.id, atual.temperatura, atual.umidade, new Date(atual.data), atual.unidade);
    });
    this.setTemperaturaIndex();
  }

  getUnidade() {
    this.http.get(`http://localhost:3000/getUnidades`).toPromise().then(res => {
      console.log(res);
    });
  }

  setTemperaturaIndex(){
    if (this.medicao.temperatura >= 23){
      this.temperatureIndex = 'hot´';
      this.image = 'assets/images/hot1.png'
      this.message = 'De acordo com as temperaturas, é melhor ir para uma praia ou se refrescar com um sorvete!';
    }else {
      this.temperatureIndex = 'cold';
      this.image = 'assets/images/cold1.png';
      this.message = 'De acordo com as temperaturas, o esquema para o fim de semana é netflix and chill';
    }
  }

}
