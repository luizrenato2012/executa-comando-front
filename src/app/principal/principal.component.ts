import { Component, OnInit } from '@angular/core';
import { ItemExecucaoService } from './item-execucao.service';
import { ItemExecucao } from './item-execucao';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  itens1 : ItemExecucao[];
  itens2 : ItemExecucao[];
  itens3 : ItemExecucao[];
  itens4 : ItemExecucao[];
  saida="";
  comando="";
  marcaItens = false;

  constructor(private itemExecucaoService : ItemExecucaoService) {
  }

  ngOnInit() {
    console.log("Iniciando formulario");
    this.itens1 = this.itemExecucaoService.itens1;
    this.itens2 = this.itemExecucaoService.itens2;
    this.itens3 = this.itemExecucaoService.itens3;
    this.itens4 = this.itemExecucaoService.itens4;
  }

  executa() {
    console.log('Executando comando '+ this.itens1);
    console.log("total de itens marcados " + this.itemExecucaoService.getItensMarcados().length);
    this.itemExecucaoService.getItensMarcados().forEach(item => console.log(`${item.host} - ${item.database}`));
  }

  marcaTodos() {
    console.log(`Marca todos 2 ${this.marcaItens}`);
    this.itemExecucaoService.marcaItens(!this.marcaItens);
  }

  limpaSaida() {
    this.saida="";
  }

}
