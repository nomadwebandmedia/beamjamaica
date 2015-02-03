$(document).ready(function(){


	$("#maximage").maximage({
	 cycleOptions: {
            speed: 800,
            timeout: 8000,

        },
        onFirstImageLoaded: function(){
           $('#cycle-loader').hide();
          $('#maximage').fadeIn('fast');
        }
    });
});

	/*$.vegas('slideshow',{
		delay:7000,
		backgrounds: [
			{src:'../img/billboards/5.jpg', fade:1000},
			{src:'../img/billboards/2.jpg', fade:1000},
			{src:'../img/billboards/3.jpg', fade:1000},
			{src:'../img/billboards/4.jpg', fade:1000},
			{src:'../img/billboards/1.jpg', fade:1000},
			{src:'../img/billboards/6.jpg', fade:1000}
		]
	})('overlay', {
		src:'img/overlays/02.png'
	});*/
