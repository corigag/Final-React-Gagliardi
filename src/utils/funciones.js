export const consultarBDD = async (ruta) => { //ruta para consultar base de datos

    //no uso fetch + .then pq los valores solo se pueden consultar dentro de esta estructura (fetch then ) 
    //por eso trabajo con async await. las funciones de por si son sincronicas , entonces explicito que va 
    //a ser asincronica

    const response = await fetch(ruta)
    const datos = await response.json() //convierto de promesa a objeto , es asincronico
    return datos 

    //hago lo mismo que fetch .then pero dentro de una funcion para poder exportar importar ejecutarla donde quiera

}