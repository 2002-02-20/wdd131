
function createHeaderContent() {
  return `
     <section class="header-section">
    <h1 id="pricipal-text"><a href="./index.html" id="header-section-link">Mind Museum</a></h1>
    <ul>
      <li id="menuIcon"><span><img src="../images/menu.png" alt="#closeIcon" id="menuIconImg"></span></li>
      <li id="closeIcon"><span><img src="../images/close.png" alt="Close Icon" id="closeIconImg"></span></li>
    </ul>
  </section>
  <nav id="navigation">
    <ul>
      <li><a href="index.html" id="homeLink">Home</a></li>
      <li><a href="gallery-page.html" id="oldLink">Gallery Page</a></li>
      <li><a href="quiz-page.html" id="newLink">Quiz Page</a></li>
    </ul>
  </nav>
  `;
}


function createFooterContent() {
  return `
    <p class="footer-content">
        ©<span id="currentYear"> 👨‍💻</span> Derek Moscui Maldonado <span>👨‍💻</span> Ecuador
    </p>
    <p class="last-modified">
        Last Modification: <span id="lastModified"></span>
    </p>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");
  const footerContainer = document.getElementById("footer");

  headerContainer.innerHTML = createHeaderContent();
  footerContainer.innerHTML = createFooterContent();


  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).replace(",", "");


const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navLinks = document.getElementById('navigation');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});


closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 740) {
        menuIcon.style.display = '';
        closeIcon.style.display = '';
        navLinks.classList.remove('show');
    } else {
        if (!navLinks.classList.contains('show')) {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }})
});

