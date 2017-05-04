BaseAbstractApp.prototype.beforeRender = function () {
	urlAva = this.userData.userAvatar;
	nameUser = this.userData.userName;
	
}

new BaseAbstractApp();

BaseAbstractApp.prototype._show = function () {
	  delay();
	  
}

BaseAbstractApp.prototype._run = function () {
	MEGATEST.onReadyToShow();
	
}



var ammount = 0;
function start(count, who) {
	ammount +=count;
	document.getElementById('score').innerHTML = 'Баланс: ' + ammount + '$';
	document.getElementById(who).style.display = 'none';
	setTimeout(function () {document.getElementById(who).style.display = 'block';}, 500);
		
}

function time(){
	
	var t = 20;
			var timerId = setInterval(function(){
			t-=1;	
			var zero = '00:'
			if(t<=9){
				zero+='0';
				document.getElementById('timer').innerHTML = zero + t + ' сек';
			} else{
				document.getElementById('timer').innerHTML = zero + t + ' сек';
			}
			}, 1000);
			setTimeout(function() {
			clearInterval(timerId);
			document.getElementById('text').innerHTML = 'Балланс составил: ' + ammount + ' $';
			document.getElementById('stop').style.display = 'block';
			}, 21000);	
			
}

function delay(){
	var deley = 3;
	var timerId = setInterval(function(){
		deleyTreeSec.innerHTML = deley;
		deley--;
	}, 1000);
	setTimeout(function(){delayBlock.style.display = 'none'; time(); clearInterval(timerId);}, 3500);
	 
}



