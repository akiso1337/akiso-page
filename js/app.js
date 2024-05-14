$(window).on('load', function () {
	$preloader = $('.preloader')
	$preloader.delay(350).fadeOut('slow');
});

const video = document.getElementById('background');
const muteBtn = document.getElementById('mute-button');
const volumeSlider = document.getElementById('vol-control');
video.volume = 0.3;

function musicPreferYes() {
	hideQuestion();
	toggleMute();
	removeBlur();
	setTimeout(showWrapper, 1000);
}

function musicPreferNo() {
	hideQuestion();
	removeBlur();
	setTimeout(showWrapper, 1000);
}

function hideQuestion() {
	video.play();
	$('.music-prefer').delay(350).fadeOut('slow');
}

function showWrapper() {
	$('.wrapper').css('display', 'block');
}

function removeBlur() {
	video.classList.add("blur-animation")
}

function toggleMute() {
	video.muted = !video.muted

	document.getElementById("music-prefer-yes").onclick = null;
}

muteBtn.addEventListener('click', toggleMute)
volumeSlider.addEventListener('input', e => {
	video.volume = e.target.value
	video.muted = e.target.value === 0
})

function volumeSliderBG() {
	volumeSlider.style.background = `linear-gradient(to top, rgba(255, 0, 98, 0.45) ${volumeSlider.value * 100}%, rgba(255, 255, 255, 0.3) ${volumeSlider.value * 100}%)`;
}

video.addEventListener('volumechange', () => {
	volumeSlider.value = video.volume
	volumeSliderBG()
	let unmuteIcon = '<i class="bx bxs-volume-mute"></i>';
	let muteIcon = '<i class="bx bxs-volume-full"></i>';
	if (video.muted || video.volume === 0) {
		volumeSlider.value = 0;
		muteBtn.innerHTML = unmuteIcon;
		volumeSliderBG()
	} else {
		muteBtn.innerHTML = muteIcon;
	}
})

