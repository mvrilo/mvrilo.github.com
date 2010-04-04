/*
Author: Murilo Santana
Date: 04/03/2010 (mmddyyyy)
Feel free to use and copy this script
*/

$(document).ready(function(){
	$('h1 a').mouseover(function(){
		$(this).animate({color:'#d90000'}, 2000);
	}).mouseout(function(){
		$(this).animate({color:'#11119f'}, 2000);
	});

	$.ajax({
		url : 'http://twitter.com/statuses/user_timeline/mvrilo.json?count=2&callback=?',
		dataType : 'json',
		success : function(data){
			$('#twitter').attr('title',data[0].text);
			$('#twitter').attr('alt',data[0].text);
		},
		error : function(){
			$('#twitter').attr('title','Follow me on Twitter');
			$('#twitter').attr('alt','Follow me on Twitter');
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
