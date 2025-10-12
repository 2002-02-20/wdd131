let quotes = [];
//API OF GIT HUB
async function obtenerCitaConAutor() {
  try {
    const respuesta = await fetch("https://thequotesapi.onrender.com/quotes");
    const datos = await respuesta.json();
    quotes = datos;

    const uniqueAuthors = quotes
      .map((quote) => quote.author)
      .filter((author, index, self) => self.indexOf(author) === index); // Eliminar duplicados

    renderApiGithub(uniqueAuthors);
  } catch (error) {
    console.error("Error al obtener la cita:", error);
  }
}

function renderApiGithub(apiData) {
  const sectionPrincipal = document.querySelector(".box-image");
  sectionPrincipal.innerHTML = "";
  const fragment = document.createDocumentFragment();

  apiData.forEach((element) => {
    const nameOrganice = element;
    const finalName = nameOrganice
      .toLowerCase()
      .replace(/ /g, "_")
      .replace(/\./g, "");
    const imageUrl = `https://thequotesapi.onrender.com/images/${finalName}.png`;
    const div = document.createElement("div");
    div.classList.add("temple-name");
    div.innerHTML = `
      <picture>
        <img src="${imageUrl}" alt="${element.author}" loading="lazy" id="people-image">
      </picture>
 <p>${nameOrganice}</p>
    `;
    fragment.appendChild(div);
  });

  sectionPrincipal.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerCitaConAutor();
});
