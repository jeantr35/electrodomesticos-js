import Electrodomesticos from "./Electrodomesticos.js";
import Televisor from "./Televisor.js";
import Nevera from "./Nevera.js";

var precioTotal = 0;

export default function crearFactura(inventario, carrito){
    
    calcularPrecioElectrodomestico(carrito);
    console.log(inventario);
    return precioTotal;

}

function calcularPrecioElectrodomestico(carrito){
    
    carrito.forEach(element => {
        precioTotal += element.getPrecio();
    });

}
