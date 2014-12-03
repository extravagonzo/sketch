var bitCount = 256
var bitSize = "60px"

$(document).ready(function(){
	for(var i = 1; i<=bitCount; i++) {
		$('<div />').addClass('bit').appendTo('.container');
	}
	
	$('.bit').mouseenter(function(){
		$(this).css("background-color",'#'+(Math.random().toFixed(6).toString(16)).slice(2));
	});

	$('button').click(function() {
		$('.bit').remove();
		var bitPerSide = prompt("Making a new grid. How many squares per side?");
		bitCount = bitPerSide * bitPerSide;
		bitSize = 960 / bitPerSide;
		console.log(bitSize);
		for (var i = 1; i<=bitCount; i++) {
			$('<div />').addClass('bit').appendTo('.container');
		}
		$('.bit').mouseenter(function(){
			$(this).css("background-color",'#'+(Math.random().toFixed(6).toString(16)).slice(2));
		});
		$('.bit').css('height', bitSize + 'px');
		$('.bit').css('width', bitSize + 'px');
	});
});

