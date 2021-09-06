import Electrodomesticos from "./Electrodomesticos.js";
import Nevera from "./Nevera.js";

var consumo = "B";
var nacionalidad = "nacional"
var capacidad = 140;
var electrodomestico = new Nevera(consumo, nacionalidad, capacidad);
electrodomestico.calcularPrecio();
console.log(electrodomestico.getPrecio());