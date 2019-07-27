import { Injectable } from '@angular/core';
import { ItemExecucao } from './item-execucao';

@Injectable({
  providedIn: 'root'
})
export class ItemExecucaoService {

  itens1 : ItemExecucao[];
  itens2 : ItemExecucao[];
  itens3 : ItemExecucao[];
  itens4 : ItemExecucao[];

  constructor() {
    this.init();
   }

  init() {
    this.itens1 = [];
    this.itens1.push( new ItemExecucao(0,'172.18.1.1','socic_aba_ponto'));
    this.itens1.push( new ItemExecucao(1,'172.16.3.1','socic_cap_ponto'));
    // this.itens1.push( new ItemExecucao(2,'172.16.3.1','socic_cap_ponto'));
    // this.itens1.push( new ItemExecucao(3,'172.18.1.1','socic_aba_ponto'));

    this.itens2 = [];
    this.itens2.push( new ItemExecucao(0,'172.19.80.1','socic_rmo_ponto'));
    this.itens2.push( new ItemExecucao(1,'172.18.10.1','socic_bcn_ponto'));
    // this.itens2.push( new ItemExecucao(2,'172.19.20.1','socic_sdn_ponto'));
    // this.itens2.push( new ItemExecucao(3,'172.19.40.1','socic_bao'));

    this.itens3 = [];
    this.itens3.push( new ItemExecucao(0,'172.18.20.1','socic_bgc_ponto'));
    this.itens3.push( new ItemExecucao(1,'172.19.20.1','socic_sdn_ponto'));
    // this.itens3.push( new ItemExecucao(2,'172.19.155.1','socic_tmc'));
    // this.itens3.push( new ItemExecucao(3,'172.19.135.200','socic_mju'));

    this.itens4 = [];
    this.itens4.push( new ItemExecucao(0,'172.16.3.1','socic_cap_ponto'));
    this.itens4.push( new ItemExecucao(1,'172.19.115.1','socic_igm_ponto'));
    this.itens4.push( new ItemExecucao(2,'172.19.150.1','socic_tal_ponto'));
    this.itens4.push( new ItemExecucao(3,'172.19.40.1','socic_bao_ponto'));

  }

  marcaItens(marca:boolean) {
    // console.log(`Marca todos ${marca}`);
    this.itens1[0].marcado = marca;
    this.itens1[1].marcado = marca;

    this.itens2[0].marcado = marca;
    this.itens2[1].marcado = marca;

    this.itens3[0].marcado = marca;
    this.itens3[1].marcado = marca;

    this.itens4[0].marcado = marca;
    this.itens4[1].marcado = marca;
  }

  getItensMarcados() {
    // console.log('Itens marcados ');
    let itens = this.itens1.filter(item=> item.marcado);
    this.itens2.filter(item=>item.marcado)
      .forEach( item => itens.push(item));
    this.itens3.filter(item=>item.marcado)
    .forEach( item => itens.push(item));  
    this.itens4.filter(item=>item.marcado)
      .forEach( item => itens.push(item));
      return itens;
  }

  
}
