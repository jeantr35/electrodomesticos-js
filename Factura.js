var precioTotal = 0;

export default function crearFactura(inventario){

   
    var precioTvs = 0;
    var precioNeveras = 0;
    var precioElectrodomesticos = 0;

    calcularPrecioElectrodomestico(inventario, 5, "televisor", "B", "importado");
    console.log(precioTotal);

}

function calcularPrecioElectrodomestico(inventario, cantidad, tipo, consumo, nacionalidad){
    let contador = 0;

    for(let i = 0; i<inventario.length; i++){
        if(cantidad===contador){break;}

        if(inventario[i].getTipo() === tipo && inventario[i].getConsumo() === consumo && inventario[i].getNacionalidad() === nacionalidad){
            precioTotal += inventario[i-contador].getPrecio();
            inventario.splice(i-contador,1);
            contador++;
        }
    }

}