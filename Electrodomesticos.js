export default class Electrodomesticos{

    constructor(consumo, nacionalidad){
    this.consumo = consumo;
    this.nacionalidad = nacionalidad;
    this.precio = 0;
    }

    getConsumo(){
        return this.consumo;
    }

    getNacionalidad(){
        return this.nacionalidad;
    }

    getPrecio(){
        return this.precio;
    }

    calcularPrecio(){
        if(this.consumo === "A"){
            this.precio += 450000;
        }

        if(this.consumo === "B"){
            this.precio += 350000;
        }

        if(this.consumo === "C"){
            this.precio += 250000;
        }

        if(this.nacionalidad === "nacional"){
            this.precio += 250000;
        }

        if(this.nacionalidad === "importado"){
            this.precio += 350000;
        }
    }

}
