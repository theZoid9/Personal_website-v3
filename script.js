function toggleMenu() {
  const menu = document.getElementById("myLinks");
  menu.classList.toggle("show");
}

// Auto-close menu when any link is clicked
document.querySelectorAll("#myLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("myLinks").classList.remove("show");
  });
});