/*
Author: Murilo Santana
Date: 04/03/2010 (mmddyyyy)
Feel free to use and copy this script
*/

$(document).ready(function(){
	$('h1 a').mouseover(function(){
		$(this).animate({color:'#d90000'},1000);
	}).mouseout(function(){
		$(this).animate({color:'#11119f'},1000);
	});

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
