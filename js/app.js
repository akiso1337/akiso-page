$(window).on('load', function () {
	$preloader = $('.preloader')
			$preloader.delay(350).fadeOut('slow');
});

let video = document.getElementById('background');
let btn = document.getElementById('MuteBtn');

video.volume = 0.08;

//declare unmute icon variable
let unmuteIcon = '<i class="bx bxs-volume-mute"></i>';

//declare mute icon variable
let muteIcon = '<i class="bx bxs-volume-full"></i>';

function myFunction() {
	// toggle the muted property of the video element
	video.muted = !video.muted;

	// if the video is muted, set the btn.innerHTML to unmuteIcon
	// otherwise, set it to the muteIcon
	if (video.muted) {
		btn.innerHTML = unmuteIcon;
	} else {
		btn.innerHTML = muteIcon;
	}
}