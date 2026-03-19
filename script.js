function startWish() {
  let name = document.getElementById("nameInput").value;

  if (name === "") {
    alert("Enter your name!");
    return;
  }

  document.getElementById("wishText").innerText =
    "Eid Mubarak, " + name + " 🌙✨";

  document.getElementById("bgMusic").play();
}

function openGift() {
  alert("🎉 Eid Surprise!");
  confetti();
}

// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("click", (e) => {
  for (let i = 0; i < 20; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      dx: (Math.random() - 0.5) * 5,
      dy: (Math.random() - 0.5) * 5,
      life: 100
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
    ctx.fillRect(p.x, p.y, 3, 3);

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

// Share system
window.onload = function () {
  let params = new URLSearchParams(window.location.search);
  let name = params.get("name");

  if (name) {
    document.getElementById("wishText").innerText =
      "Eid Mubarak, " + name + " 🌙✨";
  }
};
function confetti() {
  for (let i = 0; i < 100; i++) {
    let c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "5px";
    c.style.height = "5px";
    c.style.background = "red";
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.top = "-10px";
    document.body.appendChild(c);

    let fall = setInterval(() => {
      c.style.top = parseInt(c.style.top) + 5 + "px";
      if (parseInt(c.style.top) > window.innerHeight) {
        c.remove();
        clearInterval(fall);
      }
    }, 30);
  }
}
function toggleMusic() {
  let music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
