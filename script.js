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
  alert("🎉 Surprise! Eid Mubarak!");
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

    ctx.fillStyle = "yellow";
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
