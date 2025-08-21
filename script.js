// Tombol next
document.getElementById("nextBtn").addEventListener("click", function() {
    window.location.href = "home.html";
  });
  
  // === Animasi Partikel Bintang ===
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  
  let stars = [];
  const numStars = 150; // jumlah bintang
  let w, h;
  
  function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2
      });
    }
  }
  
  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.beginPath();
    stars.forEach(star => {
      ctx.moveTo(star.x, star.y);
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    });
    ctx.fill();
    update();
  }
  
  function update() {
    stars.forEach(star => {
      star.y += star.speed;
      if (star.y > h) {
        star.x = Math.random() * w;
        star.y = 0;
      }
    });
  }
  
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  
  init();
  animate();
  window.addEventListener("resize", init);
  