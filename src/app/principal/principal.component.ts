import { Component, OnInit } from '@angular/core';
import { ItemExecucaoService } from './item-execucao.service';
import { ItemExecucao } from './item-execucao';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  itens : ItemExecucao[];
  host0=false;
  host1=false;
  host2=false;
  host3=false;

  constructor(private itemExecucaoService : ItemExecucaoService) {
    this.itens = [];
   }

  ngOnInit() {
    console.log("Iniciando formulario");
    this.itens = this.itemExecucaoService.itens;
    //for(let i=0; i < this.itens.length; i++) {
    //  console.log( this.itens[i]);
   // }
  }

  seleciona() {
    console.log(`${this.host0} - ${this.host1} - ${this.host2} - ${this.host3}`);
  }

  marcaTodos() {
    this.host0=!this.host0;
    this.host1=!this.host1;
    this.host2=!this.host2;
    this.host3=!this.host3;
  }

}
