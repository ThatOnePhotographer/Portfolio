document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById("name").value.trim());
    const email = encodeURIComponent(document.getElementById("email").value.trim());
    const message = encodeURIComponent(document.getElementById("message").value.trim());
    const subject = encodeURIComponent("Portfolio inquiry from " + name);
    const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\n${decodeURIComponent(message)}`);
    const recipient = "elliottohanderstein@gmail.com";

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
