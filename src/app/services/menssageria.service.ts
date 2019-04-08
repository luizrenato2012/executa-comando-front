import { Injectable, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { PrincipalComponent } from '../principal/principal.component';
import { Observador } from '../principal/observador';

@Injectable({
  providedIn: 'root'
})
export class MenssageriaService {

  private stompClient=null; 

  private observador : Observador;
  constructor( observer : Observador) {
    this.observador = observer;
  }

  conecta() {
    const socket = new SockJS("http://localhost:8080/webserver");
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame)=>{
       //console.log('Conectado '+ frame); 
       this.stompClient.subscribe('/topic/respostas', (resposta) =>{
        let retorno =  JSON.parse(resposta.body);
        console.log('Recebido ' + retorno);
        this.observador.atualizaSaida(retorno.mensagem);
       });
    });
  }

  desconecta() {
    if(this.stompClient!=null) {
      this.stompClient.disconnect();
    }
    console.log('Desconectado!');
  }


  enviaMensagem(message: string) {
    this.stompClient.send(
      '/app/executa', 
      {}, message );
  }
}
