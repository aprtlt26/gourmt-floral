const btnPlay = document.getElementById('btn-play');
const video = document.getElementById('video');

btnPlay.addEventListener('click', function() {
  video.classList.add('show-video');
  video.play();
});
