const target = new Date("2026-03-01T00:00:00");

const chip = document.getElementById("countdownChip");
const dayMessage = document.getElementById("dayMessage");
const letter = document.getElementById("letter3d");
const surpriseText = document.getElementById("surpriseText");

const surprises = [
  "Tu es mon plus beau voyage, même sans billet.",
  "Plan secret: un week-end entièrement pensé pour toi.",
  "Rappel: ton sourire me fait perdre tous mes moyens.",
  "Mission anniversaire: t'aimer encore plus fort chaque jour."
];

function pad(n) {
  return String(n).padStart(2, "0");
}

function tick() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    chip.textContent = "🎉 Joyeux anniversaire mon amour";
    dayMessage.textContent = "C'est aujourd'hui: cette lettre se transforme en pluie de love.";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  chip.textContent = `⏳ ${days}j ${pad(hours)}:${pad(mins)}`;
}

tick();
setInterval(tick, 1000);

document.getElementById("openLetter").addEventListener("click", () => {
  letter.classList.toggle("open");
});

document.getElementById("goIdeas").addEventListener("click", () => {
  document.getElementById("menus").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  const message = surprises[Math.floor(Math.random() * surprises.length)];
  surpriseText.textContent = message;
});

document.querySelectorAll(".reveal").forEach((el) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(el);
});
