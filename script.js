const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Buka menu" : "Tutup menu");
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      navLinks.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      navLinks.classList.remove("is-open");
    }
  });
}

const worksTrack = document.querySelector(".works-track");

if (worksTrack) {
  document.querySelectorAll(".carousel-button").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.direction);
      const card = worksTrack.querySelector(".work-card");
      const distance = card ? card.getBoundingClientRect().width + 15 : 190;
      worksTrack.scrollBy({ left: direction * distance, behavior: "smooth" });
    });
  });
}

const workDialog = document.querySelector(".work-dialog");
const dialogArt = document.querySelector(".dialog-art");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector(".dialog-description");

if (workDialog && dialogArt && dialogTitle && dialogDescription) {
  document.querySelectorAll(".work-card").forEach((card) => {
    card.addEventListener("click", () => {
      const artwork = card.querySelector(".work-art");
      if (!artwork) {
        return;
      }

      dialogArt.replaceChildren(artwork.cloneNode(true));
      dialogTitle.textContent = card.dataset.workTitle || "Pilihan karya";
      dialogDescription.textContent = card.dataset.workDescription || "";
      workDialog.showModal();
    });
  });

  workDialog.addEventListener("click", (event) => {
    if (event.target === workDialog) {
      workDialog.close();
    }
  });
}

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("is-light");
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", isLight ? "Gunakan tema gelap" : "Gunakan tema terang");
    themeToggle.textContent = isLight ? "☀" : "☾";
  });
}

const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}
