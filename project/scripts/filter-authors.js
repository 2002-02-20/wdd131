let quotes = [];
//API OF GIT HUB
async function obtenerCitaConAutor() {
  try {
    const respuesta = await fetch("https://thequotesapi.onrender.com/quotes");
    const datos = await respuesta.json();
    quotes = datos;
    const uniqueAuthors = quotes.map(quote => quote.author).filter((author, index, self) => self.indexOf(author) === index); // Eliminar duplicados


    renderApiGithub(quotes);
  } catch (error) {
    console.error("Error al obtener la cita:", error);
  }
}

//variable renderApiGithub = renderApiGithub
function renderApiGithub(apiData) {


  const sectionPrincipal = document.querySelector("#section-principal");
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
     
    `;
    fragment.appendChild(div);
  });

  sectionPrincipal.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerCitaConAutor();
});





/*FUNCIONS OF FILTER 
const groupedQuotes = quotes.reduce((acc, quote) => {
  if (!acc[quote.author]) {
    acc[quote.author] = [];
  }
  acc[quote.author].push(quote.quote);
  return acc;
}, {});

renderApiGithub(groupedQuotes);


const homelink = document.getElementById("homeLink");
homelink.addEventListener("click", () => {
  renderApiGithub(temples);
});

const oldlink = document.getElementById("oldLink");
oldlink.addEventListener("click", () => {
  const oldTemples = temples.filter((temple) => {
    const newData = parseInt(temple.dedicated.split(",")[0]);
    return newData < 1900;
  });

  renderApiGithub(oldTemples);
});

const newlink = document.getElementById("newLink");
newlink.addEventListener("click", () => {
  const newTemples = temples.filter((temple) => {
    const newData = parseInt(temple.dedicated.split(",")[0]);
    return newData > 2000;
  });
  renderApiGithub(newTemples);
});

const largelink = document.getElementById("largeLink");
largelink.addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  renderApiGithub(largeTemples);
});

const smalllink = document.getElementById("smallLink");
smalllink.addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  renderApiGithub(smallTemples);
});

*/
