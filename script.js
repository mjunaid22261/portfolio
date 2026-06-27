// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollMiddle = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollMiddle >= sectionTop && scrollMiddle <= sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
  const isOpen = navLinksContainer.classList.contains("active");
  hamburger.textContent = isOpen ? "\u2716" : "\u2630";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
    hamburger.textContent = "\u2630";
  });
});
