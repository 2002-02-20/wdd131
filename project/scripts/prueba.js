async function obtenerCitaConAutor() {
  try {
    const respuesta = await fetch(
      "https://thequotesapi.onrender.com/quotes/random"
    );

    
    const datos = await respuesta.json();
    console.log(datos);

    const frase = datos.quote;
    const autor = datos.author; 
    
    
    const image = autor.toLowerCase().replace(/ /g, "_" ).replace(/\./g, "");
    
    const imagenURL = `https://thequotesapi.onrender.com/images/${image}.png`;
    
    document.getElementById("author").textContent = autor;
    document.getElementById("phrase").textContent = `"${frase}"`;
    document.getElementById("picture").src = imagenURL;
  } catch (error) {
    console.error("Error al obtener la cita:", error);
  }
}



async function obtenerCitaConAutor() {
  try {
   
    const autorRes = await fetch('https://thequotesapi.onrender.com/quotes/random');
    const autorData = await autorRes.json();


    console.log(autorData);
    const nombre = autorData.author;
    const imagen = autorData.image;
    const quote = autorData.quote;


    const fraseRes = await fetch(`https://thequotesapi.onrender.com/quotes/random`);
    const fraseData = await fraseRes.json();
    console.log(fraseData);
    const frase = fraseData[0]?.quote || "Frase no encontrada";


    document.getElementById("nombre").textContent = nombre;
    document.getElementById("frase").textContent = `"${frase}"`;
    document.getElementById("foto").src = imagen;

  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

