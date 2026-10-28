export function getNavbarHeight() {
  return window.innerWidth <= 480 ? 56 : window.innerWidth <= 850 ? 60 : 75;
}

export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const top = section.getBoundingClientRect().top + window.scrollY - getNavbarHeight();
  window.scrollTo({ top, behavior: "smooth" });
}
