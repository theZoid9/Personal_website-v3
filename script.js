function toggleMenu() {
  const menu = document.getElementById("myLinks");
  menu.classList.toggle("show");
}


document.querySelectorAll("#myLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("myLinks").classList.remove("show");
  });
});

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

const actionURL = "https://formspree.io/f/mwpbyyzg"; 

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    const formData = new FormData(form);

    try {
      const response = await fetch(actionURL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        successMsg.style.display = "block";
        form.reset();
      } else {
        errorMsg.style.display = "block";
      }
    } catch (error) {
      errorMsg.style.display = "block";
      console.error("Form submission error:", error);
    }
  });


