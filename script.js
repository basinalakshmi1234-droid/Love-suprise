const text = "I Love You Chpuuuuu 💗😁";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 90);
  }
}

window.onload = () => {
  typeWriter();
};

function openHeart() {
  const box = document.getElementById("love");
  box.style.display = "block";

  document.body.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.02)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 600
    }
  );
}
