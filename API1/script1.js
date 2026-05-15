const boton=document.getElementById("boton");
const imagen =document.getElementById("imagenGato");
boton.addEventListener("click", obtenerGato);
async function obtenerGato(){
    const respuesta =await fetch(
                "https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY"
            );
        const datos =await respuesta.json();
        console.log(datos);
        imagen.src=datos[0].url;
    }

   