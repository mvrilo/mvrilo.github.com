$(document).ready(function(){
	$('h1').mouseover(function(){
		$(this).animate({color:'#d90000'}, 2000);
	}).mouseout(function(){
		$(this).animate({color:'#11119f'}, 2000);
	});

	$.ajax({
		url : 'http://twitter.com/statuses/user_timeline/mvrilo.json?count=2&callback=?',
		dataType : 'json',
		success : function(json){
			$('#twitter').attr('title',json[0].text);
			$('#twitter').attr('alt',json[0].text);
		},
		error : function(){
			$('#twitter').attr('title','Follow me on Twitter');
			$('#twitter').attr('alt','Follow me on Twitter');
		}
	});
});
