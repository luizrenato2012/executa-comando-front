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
    this.itens1.push( new ItemExecucao(0,'localhost','teste'));
    // this.itens1.push( new ItemExecucao(1,'172.18.120.1','socic_sti'));
    // this.itens1.push( new ItemExecucao(2,'172.18.1.1','socic_aba'));
    // this.itens1.push( new ItemExecucao(3,'172.18.1.1','socic_aba_ponto'));

    this.itens2 = [];
    this.itens2.push( new ItemExecucao(0,'192.168.0.8','teste'));
    // this.itens2.push( new ItemExecucao(1,'172.19.20.1','socic_sdn'));
    // this.itens2.push( new ItemExecucao(2,'172.19.20.1','socic_sdn_ponto'));
    // this.itens2.push( new ItemExecucao(3,'172.19.40.1','socic_bao'));

    this.itens3 = [];
    this.itens3.push( new ItemExecucao(0,'localhost','teste'));
    // this.itens3.push( new ItemExecucao(1,'172.16.61.4','socic_lms_ponto'));
    // this.itens3.push( new ItemExecucao(2,'172.19.155.1','socic_tmc'));
    // this.itens3.push( new ItemExecucao(3,'172.19.135.200','socic_mju'));

    this.itens4 = [];
    this.itens4.push( new ItemExecucao(0,'192.168.0.5','teste'));
    // this.itens4.push( new ItemExecucao(1,'172.16.60.4','socic_sll'));
    // this.itens4.push( new ItemExecucao(2,'172.16.112.1','socic_sfx'));
    // this.itens4.push( new ItemExecucao(3,'172.19.25.1','socic_vir'));

  }

  marcaItens(marca:boolean) {
    console.log(`Marca todos ${marca}`);
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
    console.log('Itens marcados ');
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
