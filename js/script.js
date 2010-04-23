/*
Author: Murilo Santana
Feel free to use and copy this script
*/

$(document).ready(function(){
	$('h1 a').mouseover(function(){
		$(this).animate({color:'#d90000'},1000);
	}).mouseout(function(){
		$(this).animate({color:'#11119f'},1000);
	});

	if (navigator.userAgent.match(/Chrome\/5/gi)){ /*fade bug on Chrome beta <http://dev.jquery.com/ticket/6409>*/
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

	$.ajax({
		url : 'http://freegeoip.net/json?callback=?',
		dataType : 'jsonp',
		success : function(data){
			$('#ip').find('a').append(data.Ip);
		},
		error : function(){
			$('#ip').find('a').append('could not obtain address');
		}
	});
});
