// Loading screen //
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 1000); 
});


const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});


const form = document.querySelector("#contact form");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  const response = await fetch("https://formspree.io/f/yamkela-lusithi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });


  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Message sent successfully!");
  }
});