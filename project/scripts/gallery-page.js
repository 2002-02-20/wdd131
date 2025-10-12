let quotes = [];

async function obtenerCitaConAutor() {
  try {
    const respuesta = await fetch("https://thequotesapi.onrender.com/quotes");
    const datos = await respuesta.json();
    quotes = datos;
   
    renderApiGithub(quotes);
  } catch (error) {
    console.error("Error al obtener la cita:", error);
  }
}


function renderApiGithub(apiData) {
  const sectionPrincipal = document.querySelector(".gallery-container");
  sectionPrincipal.innerHTML = "";
  const fragment = document.createDocumentFragment();

  quotes.forEach((element) => {
    const filterData = apiData.filter((item) => item.author === element.author);
    if (filterData.length === 0) return;
    const image = element.author
      .toLowerCase()
      .replace(/ /g, "_")
      .replace(/\./g, "");
    const imageUrl = `https://thequotesapi.onrender.com/images/${image}.png`;
    const div = document.createElement("div");
    div.classList.add("temple-name");
    div.innerHTML = `
      <picture>
        <img src="${imageUrl}" alt="${element.author}" loading="lazy" id="temple-image">
      </picture>
       <h1 class="gallery-item">${element.author}</h1>
            <p class="caption">${element.quote}</p>
     
    `;
    fragment.appendChild(div);
  });

  sectionPrincipal.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerCitaConAutor();
});
