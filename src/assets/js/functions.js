$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop()>120) {
			$('.menu').addClass('menuAnimation');
			// $('.imagem').addClass('ImagemAnimation');
		}else{
			$('.menu').removeClass('menuAnimation');
			// $('.imagem').removeClass('ImagemAnimation');
		}
	});
});

