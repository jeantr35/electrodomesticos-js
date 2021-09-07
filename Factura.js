import Electrodomesticos from "./Electrodomesticos.js";
import Televisor from "./Televisor.js";
import Nevera from "./Nevera.js";

var precioTotal = 0;
var carrito = [];

export default function crearFactura(inventario){
    
    carritoDeCompras();
    calcularPrecioElectrodomestico(inventario, 0, "televisor", "B", "importado");
    console.log(precioTotal);
    console.log(inventario);

}

function calcularPrecioElectrodomestico(inventario, cantidad, tipo, consumo, nacionalidad){
    
    carrito.forEach(element => {
        precioTotal += element.getPrecio();
    });

}

function anadirElectrodomesticosCarrito(numero, consumo, nacionalidad){

    for(var i = 0; i<numero; i++){
        var electrodomestico = new Electrodomesticos(consumo, nacionalidad);
        electrodomestico.calcularPrecio();
        carrito.push(electrodomestico);
    }
    
}

function anadirTelevisoresCarrito(numero, consumo, nacionalidad, pulgadas, tdt){

    for(var i = 0; i<numero; i++){
        var televisor = new Televisor(consumo, nacionalidad, pulgadas, tdt);
        televisor.calcularPrecio();
        carrito.push(televisor);
    }
        
}

function anadirNeverasCarrito(numero, consumo, nacionalidad, capacidad){

    for(var i = 0; i<numero; i++){
        var nevera = new Nevera(consumo, nacionalidad, capacidad);
        nevera.calcularPrecio();
        carrito.push(nevera);
    }

}



function carritoDeCompras(){
    anadirTelevisoresCarrito(1, "B", "importado", 37, false);
    anadirNeverasCarrito(2, "C", "importado", 120);
    anadirElectrodomesticosCarrito(5, "B", "nacional");
}