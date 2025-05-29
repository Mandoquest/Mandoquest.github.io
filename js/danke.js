function ZeigeMenu() {
  const menu = document.getElementById("Menu");
  const flexbox = document.getElementById("Flexbox");

  const isOpen = menu.classList.contains("Menu-offen");

  if (isOpen) {
    // Menü schließen → Inhalt wieder zeigen
    menu.classList.remove("Menu-offen");
    flexbox.style.display = "flex";
  } else {
    // Menü öffnen → Inhalt ausblenden
    menu.classList.add("Menu-offen");
    flexbox.style.display = "none";
  }
}