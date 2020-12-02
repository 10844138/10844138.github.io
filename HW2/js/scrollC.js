var A=1;
var B=1;
$(window).scroll(function() {
	    if ( $(this).scrollTop() > 100){
	        $('.S2-R').addClass('JOI');
	        $('.S2-R').removeClass('Hid');
	        $('.S2-box').addClass('JOI');
	        $('.S2-box').removeClass('Hid');
	    }
	    if ( $(this).scrollTop() > 120){
	    	if(A<=1){
	        inte('75');
			inte2('65');
			inte3('80');
			inte4('100');
			A++;
			}
	    } 
	    if ( $(this).scrollTop() > 750){
	    	if(B<=1){
	       		$(".S2-PS2-1").width('65%');
				$(".S2-PS2-2").width('93%');
				$(".S2-PS2-3").width('70%');
				$(".S2-PS2-4").width('90%');
				$(".S2-PS2-5").width('95%');
				$(".S2-PS2-6").width('85%');
				$(".S2-PS2-7").width('85%');
			}
	    }
	     if ( $(this).scrollTop() > 1700){
	        $('.S3-A1').addClass('S3-AC1');
	        $('.S3-A1').removeClass('Hid');
	    }
	    if ( $(this).scrollTop() > 2000){
	        $('.S3-A2').addClass('S3-AC2');
	        $('.S3-A2').removeClass('Hid');
	    }
	    if ( $(this).scrollTop() > 2350){
	        $('.S3-A3').addClass('S3-AC1');
	        $('.S3-A3').removeClass('Hid');
	    }

	});

