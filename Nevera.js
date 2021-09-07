import Electrodomesticos from "./Electrodomesticos.js";

export default class Nevera extends Electrodomesticos{

    constructor(consumo, nacionalidad, capacidad){
        super(consumo, nacionalidad);
        this.capacidad = capacidad;
        this.tipo = "nevera";
    }

    getCapacidad(){
        return this.capacidad;
    }

    valorExtra(){
        if(this.capacidad > 120){
            var extra = (this.getCapacidad() - 120) / 10;
            return this.getPrecio() * 0.05 * extra;
        }
        return 0;
    }

    calcularPrecio(){
        super.calcularPrecio();
        this.precio += this.valorExtra();
        return this.getPrecio();
    }
}