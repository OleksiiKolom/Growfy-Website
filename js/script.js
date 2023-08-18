$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
	});
});