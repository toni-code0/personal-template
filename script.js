let progress = 0;
const bar = document.querySelector('.progress');
const percent = document.getElementById('percent');

const loading = setInterval(() => {
  progress++;
  bar.style.width = progress + '%';
  percent.textContent = progress + '%';

  if (progress >= 100) {
    clearInterval(loading);
    setTimeout(() => {
      window.location.href = "home.html";
    }, 500);
  }
}, 30);
