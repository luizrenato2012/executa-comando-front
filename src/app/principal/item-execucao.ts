import { Host } from '@angular/core';

export class ItemExecucao {
    
    marcado=false;
    numero: number;
    host : string;
    database:string;

    constructor( numero: number, host : string, database:string) {
        this.numero=numero;
        this.host=host;
        this.database=database;
    }

   
}