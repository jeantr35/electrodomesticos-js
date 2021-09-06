import Electrodomesticos from "./Electrodomesticos.js";
import Nevera from "./Nevera.js";
import Televisor from "./Televisor.js";

var consumo = "B";
var nacionalidad = "nacional"
var capacidad = 140;
var pulgadas = 40;
var tdt = true;
var electrodomestico = new Televisor(consumo, nacionalidad, pulgadas, tdt);
electrodomestico.calcularPrecio();
console.log(electrodomestico.getPrecio());