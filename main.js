import Electrodomesticos from "./Electrodomesticos.js";
import crearFactura from "./Factura.js";
import crearInventarioDefault from "./Inventario.js";
import Nevera from "./Nevera.js";
import Televisor from "./Televisor.js";

var respuesta = prompt("Bienvendo al sistema de facturacion, desea crear un inventario default? \n1) Si\n2) No\n");
var cantidad;
var tipo;
var consumo
var nacionalidad;
var tamano;
var esTdt;
var capacidad;
var carrito = [];

if(respuesta === "1"){
   var inventario = crearInventarioDefault();
}

while(respuesta !== "3"){

    respuesta = prompt("Seleccione una opcion:\n1) Anadir items a la cesta\n 2) Generar factura\n 3)Salir");

    switch (respuesta) {
        case "1":
            tipo = prompt("Que desea anadir? (televisor, nevera, electrodomestico)");

            switch (tipo) {
                case "electrodomestico":
                    consumo = prompt("Ingrese el consumo (A, B, C)");
                    nacionalidad = prompt("Ingrese la nacionalidad (nacional, importado)");
                    for (let i = 0; i < inventario.length; i++) {
                        if (tipo == inventario[i].getTipo() && consumo == inventario[i].getConsumo() && nacionalidad == inventario[i].getNacionalidad()) {
                            carrito.push(inventario[i]);
                            inventario.splice(i,1);
                            break
                        }
                    }
                    break;

                case "nevera":
                    consumo = prompt("Ingrese el consumo (A, B, C)");
                    nacionalidad = prompt("Ingrese la nacionalidad (nacional, importado)");
                    capacidad = parseInt(prompt("Ingrese la capacidad: "),10);
                    for (let i = 0; i < inventario.length; i++) {
                    if (tipo == inventario[i].getTipo() && consumo == inventario[i].getConsumo() && nacionalidad == inventario[i].getNacionalidad() && capacidad == inventario[i].getCapacidad()){
                        carrito.push(inventario[i]);
                        inventario.splice(i,1);
                        break;
                    }
                    }
                    break;

                case "televisor":
                    consumo = prompt("Ingrese el consumo (A, B, C)");
                    nacionalidad = prompt("Ingrese la nacionalidad (nacional, importado)");
                    tamano = parseInt(prompt("Ingrese las pulgadas: "),10);
                    esTdt = prompt("Es tdt? (si, no)");
                    if (esTdt === "si") {
                        esTdt = true;
                    }
                    else{esTdt = false;}
                    for (let i = 0; i < inventario.length; i++) {
                    if (tipo == inventario[i].getTipo() && consumo == inventario[i].getConsumo() && nacionalidad == inventario[i].getNacionalidad() && tamano == inventario[i].getPulgadas() && esTdt == inventario[i].getTdt() ){
                        carrito.push(inventario[i]);
                        inventario.splice(i,1);
                        break;
                    }
                    }
                    break;
            
                default:
                    break;
            }
            break;
        
        case "2":
            prompt("El costo total es de: " + crearFactura(inventario, carrito) + " gracias por su compra");
            carrito = [];
            break;

        default:
            break;
    }

}



