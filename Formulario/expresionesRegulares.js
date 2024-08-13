const formulario = document.getElementById("formulario-donacion")


formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+/;
    const datos = {
         correo: formulario.correo.value,
    }
    console.log(expresionRegular.test(datos.correo));
    // comprobamos si hay correo
     if(expresionRegular.test(datos.correo)){
         console.log("el correo es valido");
        return ;
     }else{
        console.log("se requiere correo valido ");
        return;
     }

    console.log(datos);
    console.log("Enviando datos...");
});