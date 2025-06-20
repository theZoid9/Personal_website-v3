function toggleMenu() {
  const menu = document.getElementById("myLinks");
  menu.classList.toggle("show");
}


document.querySelectorAll("#myLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("myLinks").classList.remove("show");
  });
});