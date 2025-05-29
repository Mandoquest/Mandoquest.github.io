function ZeigeMenu() {
  const menu = document.getElementById("Menu");
  const isOpen = menu.classList.contains("Menu-offen");
  if (isOpen) {
    // Menü schließen → Inhalt wieder zeigen
    menu.classList.remove("Menu-offen");
  } else {
    // Menü öffnen → Inhalt ausblenden
    menu.classList.add("Menu-offen");
  }
}