// Example of scroll-to-top functionality
const scrollToTopButton = document.createElement("div");
scrollToTopButton.className = "scroll-to-top";
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
