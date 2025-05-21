document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio siap ditampilkan!");

  const btn = document.getElementById('showMoreBtn');
  const info = document.getElementById('more-info');
  btn.addEventListener('click', function() {
    info.classList.toggle('hidden');
    this.textContent = info.classList.contains('hidden') ? 'Tampilkan Info Lain' : 'Sembunyikan Info';
  });

  const musicIcon = document.getElementById("musicIcon");
  const audioPlayer = document.getElementById("audioPlayer");
  let isPlaying = false;
  audioPlayer.volume = 0.5;

  musicIcon.addEventListener("click", () => {
    if (isPlaying) {
      audioPlayer.pause();
      musicIcon.style.color = "white";
    } else {
      audioPlayer.play();
      musicIcon.style.color = "#ffd6ff";
    }
    isPlaying = !isPlaying;
  });
});

// Efek scroll pada header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("tiktok-btn1");

  button.addEventListener("click", function() {
    window.location.href = "https://vt.tiktok.com/ZShGe72PC/"; // Ganti ke URL lain kalau mau
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("tiktok-btn2");

  button.addEventListener("click", function() {
    window.location.href = "https://vt.tiktok.com/ZShGRBrjr/"; // Ganti ke URL lain kalau mau
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("tiktok-btn3");

  button.addEventListener("click", function() {
    window.location.href = "https://vt.tiktok.com/ZShGhjEXG/"; // Ganti ke URL lain kalau mau
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("tiktok-btn4");

  button.addEventListener("click", function() {
    window.location.href = "https://vt.tiktok.com/ZShGhrmP7/"; // Ganti ke URL lain kalau mau
  });
});