// Typing animation for hero role text
const roles = ["Cybersecurity Analyst", "Network Engineer", "Penetration Tester"];
const el = document.getElementById("typed-role");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!el) return;

  const current = roles[roleIndex];

  if (!deleting) {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 50 : 100);
}

typeLoop();
