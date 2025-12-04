// ✅ Load Lottie animation
const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-cursor"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "Cute-Bird-Flapping-Animation.json",
});

// ✅ Cursor follows mouse
let prevX = 0;
let cX = 25; // default offset

document.addEventListener("mousemove", function (e) {
  const cursor = document.getElementById("cursor");
  const lottie = document.getElementById("lottie-cursor");

  // Flip the bird based on direction
  if (e.clientX > prevX) {
    lottie.style.transform = "scaleX(1)"; // Flip right
    cX = 60;
  } else if (e.clientX < prevX) {
    lottie.style.transform = "scaleX(-1)"; // Flip left
    cX = 0;
  }

  // Move cursor to new position
  cursor.style.transform = `translate(${e.clientX - cX}px, ${
    e.clientY - 20
  }px)`;

  // Store current X for next comparison
  prevX = e.clientX;
});
