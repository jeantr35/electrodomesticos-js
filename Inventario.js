import Electrodomesticos from "./Electrodomesticos.js";
import Nevera from "./Nevera.js";
import Televisor from "./Televisor.js";

var inventario = [];

export function crearElectrodomesticos(numero, consumo, nacionalidad){
    var electrodomesticos = [];

    for(var i = 0; i<numero; i++){
        var electrodomestico = new Electrodomesticos(consumo, nacionalidad);
        electrodomestico.calcularPrecio();
        inventario.push(electrodomestico);
    }

    return electrodomesticos;
        
}

export function crearTelevisores(numero, consumo, nacionalidad, pulgadas, tdt){
    var televisores = [];

    for(var i = 0; i<numero; i++){
        var televisor = new Televisor(consumo, nacionalidad, pulgadas, tdt);
        televisor.calcularPrecio();
        inventario.push(televisor);
    }

    return televisores;
        
}

export function crearNeveras(numero, consumo, nacionalidad, capacidad){
    var neveras = [];

    for(var i = 0; i<numero; i++){
        var nevera = new Nevera(consumo, nacionalidad, capacidad);
        nevera.calcularPrecio();
        inventario.push(nevera);
    }

    return neveras;
}

export default function crearInventarioDefault(){
    
    crearElectrodomesticos(5, "B", "nacional");
    crearNeveras(10, "A", "nacional", 140);
    crearTelevisores(7, "C", "importado", 40, true);
    crearTelevisores(13, "B", "importado", 30, true);
    crearTelevisores(3, "A", "nacional", 47, false);
    crearElectrodomesticos(8, "A", "importado");
    crearNeveras(12, "C", "importado", 120);
    return inventario;
}