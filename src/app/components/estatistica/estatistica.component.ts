import { Component, OnInit } from '@angular/core';
import {Medicao} from "../../shared/models/medicao";
import {HttpClient} from "@angular/common/http";
import {faArrowDown19, faArrowDown91} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss']
})
export class EstatisticaComponent implements OnInit {
  faArrowDown19 = faArrowDown19;
  faArrowDown91 = faArrowDown91;
  isAsc = true;
  medicoes: Array<any> = new Array<any>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(){
    this.http.get(`http://localhost:3000/getAllFromData?dias=5`).toPromise().then((res: any) => {
      const values: Array<any> = res;
      values.map(val => {
        const medicao = {
          tempMax: val.tempMaior,
          tempMin: val.tempMenor,
          umiMax: val.umiMaior,
          umiMin: val.umiMenor,
          data: new Date(val.dia).toLocaleDateString(),
          unidade: val.unidade
        }
        this.medicoes.push(medicao);
      });
      console.log(res)
    });
  }

  orderByTemperaturaMax(){
    this.isAsc = !this.isAsc;
    if (this.isAsc){
      this.medicoes.sort((a, b )=> {
        if (a.tempMax < b.tempMax){
          return -1;
        }
        if (a.tempMax > b.tempMax){
          return 1;
        }
        return 0;
      });
    }else{
      this.medicoes.sort((a, b )=> {
        if (a.tempMax > b.tempMax){
          return -1;
        }
        if (a.tempMax < b.tempMax){
          return 1;
        }
        return 0;
      });
    }

  }

}
