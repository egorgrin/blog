const dropdowns = document.querySelectorAll(".dropdown");
for (let i = 0; i < dropdowns.length; i++) {
  const dropdown = dropdowns[i];
  let timeout = null;
  dropdown.addEventListener("mouseenter", function() {
    clearTimeout(timeout);
    this.querySelector(".dropdown_content").classList.add("show");
    this.classList.add("active");
  });
  dropdown.addEventListener("mouseleave", function() {
    const self = this;
    timeout = setTimeout(function() {
      self.querySelector(".dropdown_content").classList.remove("show");
      self.classList.remove("active");
    }, 0);
  });
}
