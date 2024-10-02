document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup-menu").style.display = "none";
  document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("popup-menu").style.display = "flex";

    document
      .querySelectorAll(
        "nav, .testimonial-section, .fun-section , .service, .work-section, .contact-section ,.trusted-section,  .testimonial-section , .team-section, .philosophy-section, .service, .work-section, footer, .whatsapp-icon"
      )
      .forEach(function (section) {
        section.classList.add("hidden-section");
      });
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      const heroImage = document.querySelector(".hero-section img");
      heroImage.style.setProperty("max-width", "150%", "important");
      const nav = document.querySelector("nav");
      if (nav) {
        nav.classList.remove("hidden-section");
      }
      document
        .querySelectorAll(".blog-section,.about-section")
        .forEach(function (section) {
          section.classList.add("hidden-section");
        });
    }
  });
});
document.getElementById("popup-menu").addEventListener("click", function () {
  document.getElementById("popup-menu").style.display = "none";

  document
    .querySelectorAll(
      "nav, .testimonial-section, .service, .work-section, footer"
    )
    .forEach(function (section) {
      section.classList.remove("hidden-section");
    });
});
