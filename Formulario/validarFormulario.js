const formulario = document.getElementById("formulario-donacion")


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const datos = {
         correo: formulario.correo.value,
         pais: formulario.pais.value,
         cantidad: formulario.donacion.value,
         fecha: formulario.fecha.value,
         terminos: formulario["terminos-y-condiciones"].checked,
    }
    // comprobamos si hay correo
    if(datos.correo.length <= 2){
        console.log("se requiere correo valido");
        return correoEmpty;
    }

        // comprobamos si hay pais
    if (datos.pais === "" ){

        console.log("no existe el pais");
        return;
    }

    if(datos.cantidad === ""){
        console.log("Seleciona una cantidad a donar ");
        return;
    }

    if(datos.fecha  === ""){
        console.log("La fecha esta vacia");
        return;
    }

    if(!datos.terminos){
        console.log("acepta los terminos y condiciones");
        return;
    }
    
    console.log(datos);
    console.log("enviando datos...");
})


