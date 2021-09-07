import Electrodomesticos from "./Electrodomesticos.js";

export default class Televisor extends Electrodomesticos{

    constructor(consumo, nacionalidad, pulgadas, tdt){
        super(consumo, nacionalidad);
        this.pulgadas = pulgadas;
        this.tdt = tdt;
        this.tipo = "televisor";
    }

    getPulgadas(){
        return this.pulgadas;
    }

    getTdt(){
        return this.tdt;
    }

    valorExtra(){
        if(this.getTdt){
            this.precio += 250000;
        }
        if(this.getPulgadas() > 40){
            this.precio += this.getPrecio() * 0.3;
        }
    }

    calcularPrecio(){
        super.calcularPrecio();
        this.valorExtra();
        return this.getPrecio();
    }

}