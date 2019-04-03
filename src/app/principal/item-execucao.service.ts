import { Injectable } from '@angular/core';
import { ItemExecucao } from './item-execucao';

@Injectable({
  providedIn: 'root'
})
export class ItemExecucaoService {

  itens : ItemExecucao[];

  constructor() {
    this.init();
   }

  init() {
    this.itens = [];
    this.itens.push( new ItemExecucao(0,'172.16.40.218','socic_gefi_20190110'));
    this.itens.push( new ItemExecucao(1,'172.16.40.218','socic_mar_20190228'));
    this.itens.push( new ItemExecucao(2,'172.16.40.226','socic_bgc_20170927'));
    this.itens.push( new ItemExecucao(3,'172.16.40.138','socic'));

  }

 
}
