// Reproducir y pausar audio
document.addEventListener('DOMContentLoaded', function() {
	var audio = document.getElementById('audioPlayer');
	var playBtn = document.getElementById('playBtn');
	var pauseBtn = document.getElementById('pauseBtn');
	var progress = document.getElementById('audioProgress');
	function animateBtn(btn) {
		btn.classList.add('audio-anim-active');
		setTimeout(function() {
			btn.classList.remove('audio-anim-active');
		}, 180);
	}
	if (playBtn && pauseBtn && audio && progress) {
		playBtn.addEventListener('click', function() {
			audio.play();
			animateBtn(playBtn);
		});
		pauseBtn.addEventListener('click', function() {
			audio.pause();
			animateBtn(pauseBtn);
		});
		// Actualizar barra de progreso
		audio.addEventListener('timeupdate', function() {
			if (audio.duration) {
				progress.value = (audio.currentTime / audio.duration) * 100;
			}
		});
		// Permitir mover la barra
		progress.addEventListener('input', function() {
			if (audio.duration) {
				audio.currentTime = (progress.value / 100) * audio.duration;
			}
		});
		// Reiniciar barra al terminar
		audio.addEventListener('ended', function() {
			progress.value = 0;
		});
	}
});
