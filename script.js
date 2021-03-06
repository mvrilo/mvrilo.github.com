/*
Author: Murilo Santana
Feel free to use and copy this script
*/

$(document).ready(function(){
	// target="_blank" hack for xhtml strict
	$("a[rel='external']").click(function(){
		window.open($(this).attr('href'));
		return false;
	});

	// header effects
	$('h1 a').mouseover(function(){
		$(this).animate({color:'#d90000'},1000);
	}).mouseout(function(){
		$(this).animate({color:'#11119f'},1000);
	});

	// google link effects
	if (navigator.userAgent.match(/Chrome\/5/gi)){ /*fade bug on Chrome beta for Linux <http://dev.jquery.com/ticket/6409>*/
		$('#google').hide().fadeIn('fast').mouseover(function(){
			$(this)
			.animate({marginLeft: "-=5px"}, 50)
			.animate({marginLeft: "+=5px"}, 50)
			.animate({marginLeft: "-=5px"}, 50)
			.animate({marginLeft: "+=5px"}, 50)
			.animate({marginLeft: "-=5px"}, 50)
			.animate({marginLeft: "+=5px"}, 50);
		});

	}
	else {
		$('#google').hide().fadeTo('fast', 0.7).mouseover(function(){
			$(this).stop().animate({opacity:1},'fast');
		}).mouseout(function(){
			$(this).stop().animate({opacity:0.7},'fast');
		});
	}

	// get tweets
	$.ajax({
		url : 'http://twitter.com/statuses/user_timeline/mvrilo.json?count=2&callback=?',
		dataType : 'json',
		success : function(data){
			$('#google').attr('title','Last tweet: ' + data[0].text);
			$('#google').attr('alt','Last tweet: ' + data[0].text);
		},
		error : function(){
			$('#google').attr('title','Check out my profiles');
			$('#google').attr('alt','Check out my profiles');
		}
	});
});
