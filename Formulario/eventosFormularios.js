const formulario = document.forms["formulario-donacion"];

/*
    Evento submit
    Nos permite detectar cuando el usuario intenta enciar un formulario
*/

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    
    console.log("enviando datos");
});

/*
    Evento Change
    Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea
*/

formulario.pais.addEventListener("change", (e) =>{
    console.log("El pais cambio");
    console.log("El pais valor es:" + e.target.value);
})

formulario["cantidad-5"].addEventListener("change", ()=> console.log("la cantidad cambio"))

formulario["cantidad-10"].addEventListener("change", ()=> console.log("la cantidad cambio"))

/*
Evento Focus
Nos permite detectar cuando un input recibe el foco de atencion
 o se conoce como blur 
*/

formulario.correo.addEventListener("focus", () => {
    console.log("ahora este input es el foco de atencion");
});

/* 
Evento Blur 
Nos permite detectatr cuando un input pierde el foco de atencion.
*/
// formulario.correo.addEventListener("blur", () => {
//     console.log("ahora este input ya no es el foco de atencion");
// })


/*  

    Evento keydown 
    Nos permite detectar cuando una tecla es presionada sobre un input 

*/
formulario.correo.addEventListener("keydown", (e) => {
    console.log(e);
})

/*
    Evento keyup
    se ejecuta cuando una tecla es levantada al escribir sobre un input 
*/


formulario.correo.addEventListener("keyup", (e) => {
    console.log(e.target.value);
})