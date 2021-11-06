$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		responsive:[
			{
				breakpoint: 540,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});
