document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector(".site-footer p");
  if (footerText) {
    footerText.textContent = `© ${year} I1achi. All rights reserved.`;
  }
});
