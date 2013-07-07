 var runSprite = function(){

	var $box = $('.progress-box');
	$box.css('position','relative');

	if($box.width() > $box.height()){
		w = $box.height()/1;
	}else{
		w = $box.width()/1;
	}

	var N = 16;

	var ox = w/2;
	var oy = w/2;

	var bw = w/16;
	var bh = w/5;
	var r = w/2 - bh/2;

	color = [
	'#000',
	'#111',
	'#222',
	'#333',
	'#444',
	'#555',
	'#666',
	'#777',
	'#888',
	'#999',
	'#aaa',
	'#bbb',
	'#ccc',
	'#ddd',
	'#eee',
	'#fff'
	];

	for(var j = 0; j < N; j++){
		var s = '<div class="progress-sprite-box" style="display:none;position:absolute;top:0px;left:0px;width:'+$box.width()+'px; height:'+$box.height()+'px">'
		for(var i = 0; i < N; i++){
			var deg = -360/N * ((i+j)%N);
			var x = ox + r*Math.sin(deg/180*Math.PI)-bw/2;
			var y = oy + r*Math.cos(deg/180*Math.PI)-bh/2;

			s +='<div class="progress-box-unit" style="width:'+bw+'px; height:'+bh+'px; position:absolute; top:'+y+'px; left:'+x+'px; background-color:'+color[N-i-1]+'; -webkit-transform: rotate('+(-deg)+'deg)"></div>';
		}
		s += '</div>'
		$box.append(s);

	}

	var cnt = 0;
	setInterval(function(){
		cnt++;
		if(cnt >= N){
			cnt = 0;
		}
		$('.progress-box .progress-sprite-box').each(function(i){
			if(i === cnt){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
	}, 1000/16);

};