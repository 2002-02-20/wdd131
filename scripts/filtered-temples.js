document.getElementById("lastModified").textContent = new Date()
  .toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
  .replace(",", "");

const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.getElementById("navigation");

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("show");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

// Función para cerrar el menú
closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("show");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 740) {
    menuIcon.style.display = "";
    closeIcon.style.display = "";
    navLinks.classList.remove("show");
  } else {
    if (!navLinks.classList.contains("show")) {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }
});

//temples array

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Rome City Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg",
  },
  {
    templeName: "Guayaquil City Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 2",
    area: 45000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/guayaquil-ecuador-temple/guayaquil-ecuador-temple-6528.jpg",
  },
  {
    templeName: "Hong Kong City China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 27",
    area: 51921,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125.jpg",
  },
];

const homelink = document.getElementById("homeLink");
homelink.addEventListener("click", () => {
  renderTemples(temples);
});

const oldlink = document.getElementById("oldLink");
oldlink.addEventListener("click", () => {
  const oldTemples = temples.filter((temple) => {
    const newData = parseInt(temple.dedicated.split(",")[0]);
    return newData < 1900;
  });

  renderTemples(oldTemples);
});

const newlink = document.getElementById("newLink");
newlink.addEventListener("click", () => {
  const newTemples = temples.filter((temple) => {
    const newData = parseInt(temple.dedicated.split(",")[0]);
    return newData > 2000;
  });
  renderTemples(newTemples);
});

const largelink = document.getElementById("largeLink");
largelink.addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  renderTemples(largeTemples);
});

const smalllink = document.getElementById("smallLink");
smalllink.addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  renderTemples(smallTemples);
});

function renderTemples(temples) {
  const sectionPrincipal = document.querySelector("#section-principal");
  sectionPrincipal.innerHTML = "";
  const fragment = document.createDocumentFragment();

  temples.forEach((temple) => {
    const div = document.createElement("div");
    div.classList.add("temple-name");
    div.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p id="location">LOCATION: <span id="location-span">${temple.location}</span></p>
      <p id="dedicated">DEDICATED: <span id="dedicated-span">${temple.dedicated}</span></p>
      <p id="size">SIZE: <span id="size-span">${temple.area} sq ft</span></p>
      <picture>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" id="temple-image">
      </picture>
    `;
    fragment.appendChild(div);
  });

  sectionPrincipal.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples);
});
