 const navLinks = document.getElementById("myDIV");
  function toggleMenu() {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  }

  function handleResize() {
    if (window.innerWidth >= 769) {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);