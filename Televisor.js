import Electrodomesticos from "./Electrodomesticos.js";

export default class Televisor extends Electrodomesticos{

    constructor(consumo, procedencia, pulgadas, tdt){
        super(consumo, procedencia);
        this.pulgadas = pulgadas;
        this.tdt = tdt;
    }

    getPulgadas(){
        return this.pulgadas;
    }

    getTdt(){
        return this.pulgadas;
    }

    valorExtra(){
        if(this.getTdt){
            this.precio += 250000;
        }
        if(this.pulgadas > 40){
            this.precio += this.getPrecio() * 0.3;
        }
    }

    calcularPrecio(){
        super.calcularPrecio();
        this.valorExtra();
        return this.getPrecio();
    }

}