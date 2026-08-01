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
function goToLovePage() {
  document.body.innerHTML = `
  <style>
    body{
      margin:0;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:linear-gradient(135deg,#ff4d6d,#ff8fab,#ffc2d1);
      overflow:hidden;
      font-family:Arial,sans-serif;
      color:white;
      text-align:center;
    }
    h1{
      font-size:42px;
      animation:zoom 1s infinite alternate;
      text-shadow:0 0 20px #fff;
    }
    p{
      font-size:24px;
      margin-top:15px;
    }
    @keyframes zoom{
      from{transform:scale(1);}
      to{transform:scale(1.15);}
    }
    .heart{
      position:fixed;
      top:-30px;
      font-size:30px;
      animation:fall 5s linear infinite;
    }
    @keyframes fall{
      to{
        transform:translateY(110vh);
      }
    }
  </style>

  <h1>🫀 I Knew It Bangaram 🫀</h1>
  <p>I Love You Forever Harshini ❤️<br>You're My Everything 🥹💖</p>
  `;

  setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="💖";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(Math.random()*3+3)+"s";
    document.body.appendChild(h);

    setTimeout(()=>{
      h.remove();
    },6000);

  },250);
      }
const noBtn = document.getElementById("no");

if(noBtn){
  noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random()*80 + "vw";
    noBtn.style.top = Math.random()*80 + "vh";
  };
}
