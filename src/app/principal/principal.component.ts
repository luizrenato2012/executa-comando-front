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

  constructor(private itemExecucaoService : ItemExecucaoService) {
    this.itens = [];
   }

  ngOnInit() {
    console.log("Iniciando formulario");
    this.itens = this.itemExecucaoService.itens;
    for(let i=0; i < this.itens.length; i++) {
      console.log( this.itens[i]);
    }
  }

  exibeAlerta() {
    if (confirm('Confirma execucao do comando ?')) {
      alert('Comando executado ');
    }
  }

}
