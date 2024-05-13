$(window).on('load', function () {
	$preloader = $('.preloader')
	$preloader.delay(350).fadeOut('slow');
});

function musicPreferYes() {
	hideQuestion();
	enableMusic()
	removeBlur();
	setTimeout(showWrapper, 1000);
}

function musicPreferNo() {
	hideQuestion();
	removeBlur();
	setTimeout(showWrapper, 1000);
}

function hideQuestion() {
	$('#background')[0].play();
	$('.music-prefer').delay(350).fadeOut('slow');
}

function showWrapper() {
	$('.wrapper').css('display', 'block');
}

function removeBlur() {
	document.getElementById("background").classList.add("blur-animation")
}

function enableMusic() {
	let video = document.getElementById('background');

	video.muted = !video.muted;
	video.volume = 0.15;

	let btn = document.getElementById('MuteBtn');
	let unmuteIcon = '<i class="bx bxs-volume-mute"></i>';
	let muteIcon = '<i class="bx bxs-volume-full"></i>';

	if (video.muted) {
		btn.innerHTML = unmuteIcon;
	} else {
		btn.innerHTML = muteIcon;
	}

	document.getElementById("music-prefer-yes").onclick = null;
}