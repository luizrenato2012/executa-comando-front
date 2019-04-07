import { Component, OnInit } from '@angular/core';
import { ItemExecucaoService } from './item-execucao.service';
import { ItemExecucao } from './item-execucao';
import { MenssageriaService } from '../services/menssageria.service';
import { Subscription } from 'rxjs';

const WEBSCOKET_URL="ws://localhost:8080/webserver";
const MESSAGE_URL="/topic/respostas";

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

  // comunicacao websocket
  messageFromServer: string;
  wsSubscription: Subscription;
  private messageService : MenssageriaService;

  constructor( private itemExecucaoService : ItemExecucaoService) {
    this.messageService = new MenssageriaService (this);
    this.messageService.conecta();
  }

  setMessageFromServer(message) {
    this.messageFromServer = message;
  }

  enviaAcao() {
    console.log("Enviando mensagem");
   this.messageService.enviaMensagem(
      JSON.stringify(
        {'host':'localhost', 
        'database':'executa', 
        'comando': 'select'})
    );
  }

  fechaConexa() {
    this.messageService.desconecta();
  }

  atualizaSaida(texto : string) {
    this.saida = this.saida+texto+"\n";
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
