import { Estado } from "./estado";

export class Contacto {
    nombre = "";
    apellido = "";
    conectado = Estado.enLinea;
    email = "" ;

    constructor(nombre,apellido,conectado,email){

        this.nombre = nombre;
        this.apellido = apellido;
        this.conectado = conectado;
        this.email = email;
    
    }
}