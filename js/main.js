$(document).ready(function(){
	// burger
	$('#burger a').click(function () {
		$('#leftdrop').slideDown();
		$('leftdrop').css({'display':'flex'});
		$('html').css({'overflow-y':'hidden'});
	});
	$('#close').click(function () {
		$('#leftdrop').slideUp();
		$('html').css({ 'overflow-y': 'auto' });
	});
	// Menu-contacts
	var menu_link = $('.nav-pills-right li:nth-child(2) a');
	var menu_components = $('.nav_right_block ul:not(.header_menu-contacts ul)');
	var contacts_container = $('.header_menu-contacts');
	menu_link.click(function () {
		contacts_container.slideDown();
		contacts_container.css('display','flex');
		menu_components.fadeOut();
	});
	$('#close_contacts').click(function () {
		contacts_container.slideUp();
		menu_components.fadeIn();
	});
	
	// Pop-up video
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: true
	});

	// Smooth scrolling
	$('.nav > li:not(#burger) > a').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
      }
	    return false; // выключаем стандартное действие
    });

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".input-group").css("margin", "0px auto");

	// Slick sliders with preloader
	$(function() {
	  $('.slider_photos, .slider_content, .screens_slider').imagesLoaded(function() {
			$('.slider_photos, .slider_content, .screens_slider').on('init', function() {
		      $('.slider_photos, .slider_content, .screens_slider').removeClass('hide');
		      $('.preloader').removeClass('show');
		  });

			$(".slider_photos").slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				initialSlide: 1,

				asNavFor: '.slider_content',
				responsive: [
				{
					breakpoint: 992,
					settings:{
						arrows: false,
						variableWidth: false
				    }
				},
				{
					breakpoint: 480,
					settings:{
						arrows: false,
						variableWidth: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: true
				    }
				}
				]
			});

			$(".slider_content").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1,
				fade: false,
				arrows: false,
				centerMode: false,
				centerPadding: '60px',
				cssEase: 'linear', 
				speed: 400,
				asNavFor: '.slider_photos'
			});

			$(".screens_slider").slick({
				arrows: false,
				centerMode: true,
				autoplay: false,
				speed: 100,
		    centerPadding: '60px',
		    initialSlide: 3,
				responsive: [
				{
					breakpoint: 768,
					settings:{
						centerMode: true,
				    centerPadding: '40px',
				    }
				}]
			});
		});
	});

	// Switch
	(function() {
		$(function() {
			return $('.icon').on('click', function() {
				if ($(this).hasClass('on')) {
					return $(this).removeClass('on');
				} else {
					return $(this).addClass('on');
				}
			});
		});
	}).call(this);

	
	// Arrow back-top
	$(function (){
		$(".back-top").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 1000){
				$(".back-top").fadeIn();
			} else{
				$(".back-top").fadeOut();
			}
		});

		$(".back-top").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});


});

// Animate
$(window).scroll(function (){
	if ($(this).scrollTop() > 1000){
		$('.iphone_block').addClass('fadeInRight');
	}
});

// Parallax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  clipRelativeInput: true
});

parallaxInstance.friction(1.8, 0.1);

// Looping animation
(function animation() {
	var animateOptions = {
		duration: 2000,
		easing: 'linear'
	};

	$(".screens_iphone")
		.find(".animated_screen")
		.animate({
				bottom: 15,
			},
			animateOptions
		)
		.animate({
				bottom: 0,
			},
			$.extend(true, {}, animateOptions, {
				complete: function() {
					animation();
				}
			})
		);
})();

