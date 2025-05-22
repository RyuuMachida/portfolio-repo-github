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

const lyrics = [
      "and you just cant call",
      "a spade, a spade ~ ",
      "I watch the moon",
      "Let it run my mood",
      "Can't stop thinking of you:>",
      "I watch you:>",
      "So long nice to know you I'll be",
      "Moving on."
    ];

    const delays = [
      [300, 200, 300, 400, 200],
      [200, 200, 200, 200, 1800],
      [1000, 900, 700, 900],
      [300, 200, 300, 400, 1000],
      [400, 500, 1000, 900, 1000],
      [1800, 900, 2500],
      [300, 200, 300, 400, 300],
      [50, 50, 50, 50]
    ];

    const lineDelays = [1400, 2400, 20000, 3000, 10000, 2000, 4000, 100, 8000];

    let lineIndex = 0;
    let wordIndex = 0;
    let words = [];

    function startLyrics() {
      document.getElementById('audio').play();
      document.getElementById('lyrics').innerHTML = '';
      lineIndex = 0;
      showLine();
    }

    function showLine() {
      if (lineIndex < lyrics.length) {
        words = lyrics[lineIndex].split(' ');
        wordIndex = 0;
        const newLine = document.createElement('div');
        newLine.id = 'line-' + lineIndex;
        document.getElementById('lyrics').appendChild(newLine);
        showWord(lineIndex);
      }
    }

    function showWord(currentLineIndex) {
      if (wordIndex < words.length) {
        const lineDiv = document.getElementById('line-' + currentLineIndex);
        const span = document.createElement('span');
        span.className = 'word';
        span.innerText = words[wordIndex] + ' ';
        lineDiv.appendChild(span);

        const delay = delays[currentLineIndex]?.[wordIndex] || 900;
        wordIndex++;
        setTimeout(() => showWord(currentLineIndex), delay);
      } else {
        lineIndex++;
        setTimeout(showLine, 1000);
      }
    }