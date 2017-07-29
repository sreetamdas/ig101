$(document).ready(function () {


	var scroll_start = 0;
	var startchange = $('#top');
	var offset = startchange.offset();
	if (startchange.length) {
		$(document).scroll(function () {
			scroll_start = $(this).scrollTop();
			if (scroll_start > offset.top) {
				$("#header").css('display', 'block');
			} else {
				$('#header').css('display', 'none');
			}
		});
	}

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing');
	});

});