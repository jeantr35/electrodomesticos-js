import Electrodomesticos from "./Electrodomesticos.js";
import crearFactura from "./Factura.js";
import crearInventarioDefault from "./Inventario.js";
import Nevera from "./Nevera.js";
import Televisor from "./Televisor.js";

var respuesta = prompt("Bienvendo al sistema de facturacion, desea crear un inventario con la informacion dada? \n1) Si\n2) No\n");

if(respuesta === "1"){
   var inventario = crearInventarioDefault();
}

crearFactura(inventario);

