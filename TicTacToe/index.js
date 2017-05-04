var urlAva;
var nameUser;
var name;
var lang;
BaseAbstractApp.prototype.beforeRender = function() {
	urlAva = this.userData.userAvatar;
	nameUser = this.userData.userName;
	document.getElementById('userAva').style.backgroundImage = 'url('+ urlAva +')';
	var fullName = decodeURIComponent(this.userData.userName);
	name = fullName.split(' ')[0];
	var lastName = fullName.split(' ')[1];
	document.getElementById('userS').innerHTML = decodeURIComponent(name) + '<br> ' + decodeURIComponent(lastName);
	lang = MEGATEST.getAppArgument("language");
	
}

new BaseAbstractApp();

 function noWin(){
     var result = 0;
     for (var i =1; i<=9;i++){
         var elString = i.toString();
         if(document.getElementById(elString).value == '  '){
             result++;
         }
     }
     if(result == 0){
		 
		 forWinOrLost();
		 avaUserWinOrLost();
		 if(lang == 'ru'){
		 
		 document.getElementById('textNo').innerHTML = 'НИЧЬЯ';
		 } else{
			 document.getElementById('textNo').innerHTML = 'DRAW';
			 document.getElementById('reset').value = 'play more';
		 }
		 document.getElementById('reset').style.display = 'block';
         document.getElementById('noy').style.display = 'block';
		 if(lang == 'ru'){
		 MEGATEST.setTestDescription('Ого! Ты использовал всю свою смекалку и хитрость, но выиграть у тебя так и не получилось! А, возможно, у тебя такая тактика и ты считаешь, что «мир дружба жвачка» - намного важнее всяких там выигрышей в играх!');
	 } else if(lang == 'en'){
		 MEGATEST.setTestDescription('Wow! You used your cunning and savvy, but failed! Or maybe it s just your tactic and you think that world peace is more important that some games!');
	 }
		 
     }
     return result;
 }



function clickB(buttonX){
	
		var bt = document.getElementById(buttonX).value = "x";
		document.getElementById(buttonX).style.backgroundImage = 'url(img/x.png)';
		document.getElementById(buttonX).disabled = true;
		
		for (var i = 1; i <= 9;i++){
			var iToString = i.toString();
			document.getElementById(iToString).disabled = true;
		}
		var anBlock = setTimeout(function(){
			for (var i = 1; i <= 9;i++){
			var iToString = i.toString();
			if(document.getElementById(iToString).value == '  '){
				document.getElementById(iToString).disabled = false;
			}	
		}
		}, 1700);
		
		var delay = setTimeout (function(){if(winOrLost() == 1){
		return this;
		} else{
			if(countSteps() >= 2){
			if(vectorWinZero() == false){
				step();
			}
		} else{
			setZeroInRandomField();
		}
		}
		winOrLost();
		 noWin();
		 }, 1700);
	
}


function setZeroInRandomField(){
	for (var i =1; i<=9;i++){
				var elString = i.toString();
			if(document.getElementById(elString).value == '  '){
				document.getElementById(elString).value = '0';
				document.getElementById(elString).disabled = true;
				document.getElementById(elString).style.backgroundImage = 'url(img/zero.png)';
				break;
			}
		}	
}


function getRandom(){
    var die = Math.floor(Math.random()*6 + 1);
    return die.toString();
}


function step(){
	
	 if(document.getElementById('1').value == 'x' && document.getElementById('2').value == 'x' && document.getElementById('3').value == '  '){
	document.getElementById('3').value = '0';
	document.getElementById('3').disabled = true;
	document.getElementById('3').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == 'x' && document.getElementById('4').value == 'x' && document.getElementById('7').value == '  '){
	document.getElementById('7').value = '0';
	document.getElementById('7').disabled = true;
	document.getElementById('7').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == 'x' && document.getElementById('5').value == 'x'&& document.getElementById('9').value == '  '){
	document.getElementById('9').value = '0';
	document.getElementById('9').disabled = true;
	document.getElementById('9').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('2').value == 'x' && document.getElementById('5').value == 'x' && document.getElementById('8').value == '  '){
	document.getElementById('8').value = '0';
	document.getElementById('8').disabled = true;
	document.getElementById('8').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == 'x' && document.getElementById('2').value == 'x' && document.getElementById('1').value == '  '){
	document.getElementById('1').value = '0';
	document.getElementById('1').disabled = true;
	document.getElementById('1').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == 'x' && document.getElementById('6').value == 'x' && document.getElementById('9').value == '  '){
	document.getElementById('9').value = '0';
	document.getElementById('9').disabled = true;
	document.getElementById('9').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == 'x' && document.getElementById('5').value == 'x'&& document.getElementById('7').value == '  '){
	document.getElementById('7').value = '0';
	document.getElementById('7').disabled = true;
	document.getElementById('7').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('4').value == 'x' && document.getElementById('5').value == 'x' && document.getElementById('6').value == '  '){
	document.getElementById('6').value = '0';
	document.getElementById('6').disabled = true;
	document.getElementById('6').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('6').value == 'x' && document.getElementById('5').value == 'x' && document.getElementById('4').value == '  '){
	document.getElementById('4').value = '0';
	document.getElementById('4').disabled = true;
	document.getElementById('4').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == 'x' && document.getElementById('4').value == 'x'&& document.getElementById('1').value == '  '){
	document.getElementById('1').value = '0';
	document.getElementById('1').disabled = true;
	document.getElementById('1').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == 'x' && document.getElementById('5').value == 'x'&& document.getElementById('3').value == '  '){
	document.getElementById('3').value = '0';
	document.getElementById('3').disabled = true;
	document.getElementById('3').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == 'x' && document.getElementById('8').value == 'x'&& document.getElementById('9').value == '  '){
	document.getElementById('9').value = '0';
	document.getElementById('9').disabled = true;
	document.getElementById('9').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('8').value == 'x' && document.getElementById('5').value == 'x'&& document.getElementById('2').value == '  '){
	document.getElementById('2').value = '0';
	document.getElementById('2').disabled = true;
	document.getElementById('2').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('9').value == 'x' && document.getElementById('8').value == 'x'&& document.getElementById('7').value == '  '){
	document.getElementById('7').value = '0';
	document.getElementById('7').disabled = true;
	document.getElementById('7').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('9').value == 'x' && document.getElementById('5').value == 'x'&& document.getElementById('1').value == '  '){
	document.getElementById('1').value = '0';
	document.getElementById('1').disabled = true;
	document.getElementById('1').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('9').value == 'x' && document.getElementById('6').value == 'x'&& document.getElementById('3').value == '  '){
	document.getElementById('3').value = '0';
	document.getElementById('3').disabled = true;
	document.getElementById('3').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == 'x' && document.getElementById('3').value == 'x'&& document.getElementById('2').value == '  '){
	document.getElementById('2').value = '0';
	document.getElementById('2').disabled = true;
	document.getElementById('2').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('4').value == 'x' && document.getElementById('6').value == 'x'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == 'x' && document.getElementById('9').value == 'x'&& document.getElementById('8').value == '  '){
	document.getElementById('8').value = '0';
	document.getElementById('8').disabled = true;
	document.getElementById('8').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == 'x' && document.getElementById('7').value == 'x'&& document.getElementById('4').value == '  '){
	document.getElementById('4').value = '0';
	document.getElementById('4').disabled = true;
	document.getElementById('4').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('2').value == 'x' && document.getElementById('8').value == 'x'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == 'x' && document.getElementById('9').value == 'x'&& document.getElementById('6').value == '  '){
	document.getElementById('6').value = '0';
	document.getElementById('6').disabled = true;
	document.getElementById('6').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == 'x' && document.getElementById('9').value == 'x'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == 'x' && document.getElementById('7').value == 'x'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else{
	 setZeroInRandomField();
 }
	
}

function vectorWinZero(){
	if(document.getElementById('1').value == '0' && document.getElementById('2').value == '0' && document.getElementById('3').value == '  '){
	document.getElementById('3').value = '0';
	document.getElementById('3').disabled = true;
	document.getElementById('3').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == '0' && document.getElementById('4').value == '0' && document.getElementById('7').value == '  '){
	document.getElementById('7').value = '0';
	document.getElementById('7').disabled = true;
	document.getElementById('7').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == '0' && document.getElementById('5').value == '0'&& document.getElementById('9').value == '  '){
	document.getElementById('9').value = '0';
	document.getElementById('9').disabled = true;
	document.getElementById('9').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('2').value == '0' && document.getElementById('5').value == '0' && document.getElementById('8').value == '  '){
	document.getElementById('8').value = '0';
	document.getElementById('8').disabled = true;
	document.getElementById('8').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == '0' && document.getElementById('2').value == '0' && document.getElementById('1').value == '  '){
	document.getElementById('1').value = '0';
	document.getElementById('1').disabled = true;
	document.getElementById('1').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == '0' && document.getElementById('6').value == '0' && document.getElementById('9').value == '  '){
	document.getElementById('9').value = '0';
	document.getElementById('9').disabled = true;
	document.getElementById('9').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == '0' && document.getElementById('5').value == '0'&& document.getElementById('7').value == '  '){
	document.getElementById('7').value = '0';
	document.getElementById('7').disabled = true;
	document.getElementById('7').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('4').value == '0' && document.getElementById('5').value == '0' && document.getElementById('6').value == '  '){
	document.getElementById('6').value = '0';
	document.getElementById('6').disabled = true;
	document.getElementById('6').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('6').value == '0' && document.getElementById('5').value == '0' && document.getElementById('4').value == '  '){
	document.getElementById('4').value = '0';
	document.getElementById('4').disabled = true;
	document.getElementById('4').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == '0' && document.getElementById('4').value == '0'&& document.getElementById('1').value == '  '){
	document.getElementById('1').value = '0';
	document.getElementById('1').disabled = true;
	document.getElementById('1').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == '0' && document.getElementById('5').value == '0'&& document.getElementById('3').value == '  '){
	document.getElementById('3').value = '0';
	document.getElementById('3').disabled = true;
	document.getElementById('3').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == '0' && document.getElementById('8').value == '0'&& document.getElementById('9').value == '  '){
	document.getElementById('9').value = '0';
	document.getElementById('9').disabled = true;
	document.getElementById('9').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('8').value == '0' && document.getElementById('5').value == '0'&& document.getElementById('2').value == '  '){
	document.getElementById('2').value = '0';
	document.getElementById('2').disabled = true;
	document.getElementById('2').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('9').value == '0' && document.getElementById('8').value == '0'&& document.getElementById('7').value == '  '){
	document.getElementById('7').value = '0';
	document.getElementById('7').disabled = true;
	document.getElementById('7').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('9').value == '0' && document.getElementById('5').value == '0'&& document.getElementById('1').value == '  '){
	document.getElementById('1').value = '0';
	document.getElementById('1').disabled = true;
	document.getElementById('1').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('9').value == '0' && document.getElementById('6').value == '0'&& document.getElementById('3').value == '  '){
	document.getElementById('3').value = '0';
	document.getElementById('3').disabled = true;
	document.getElementById('3').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == '0' && document.getElementById('3').value == '0'&& document.getElementById('2').value == '  '){
	document.getElementById('2').value = '0';
	document.getElementById('2').disabled = true;
	document.getElementById('2').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('4').value == '0' && document.getElementById('6').value == '0'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('7').value == '0' && document.getElementById('9').value == '0'&& document.getElementById('8').value == '  '){
	document.getElementById('8').value = '0';
	document.getElementById('8').disabled = true;
	document.getElementById('8').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == '0' && document.getElementById('7').value == '0'&& document.getElementById('4').value == '  '){
	document.getElementById('4').value = '0';
	document.getElementById('4').disabled = true;
	document.getElementById('4').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('2').value == '0' && document.getElementById('8').value == '0'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == '0' && document.getElementById('9').value == '0'&& document.getElementById('6').value == '  '){
	document.getElementById('6').value = '0';
	document.getElementById('6').disabled = true;
	document.getElementById('6').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('1').value == '0' && document.getElementById('9').value == '0'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else if(document.getElementById('3').value == '0' && document.getElementById('7').value == '0'&& document.getElementById('5').value == '  '){
	document.getElementById('5').value = '0';
	document.getElementById('5').disabled = true;
	document.getElementById('5').style.backgroundImage = 'url(img/zero.png)';
 } else {
	 return false;
 }
}
	
function countSteps(){
	var result = 0;
	for(var ie = 1; ie<=9;ie++){
		var toSt = ie.toString();
		if(document.getElementById(toSt).value == '  '){
			result++;
		}
	}
	result = 9 - result;
	return result;
}

function winOrLost(){
	var whoWin = 0;
	var one = document.getElementById('1').value;
    var two = document.getElementById('2').value;
    var tree = document.getElementById('3').value;
    var four = document.getElementById('4').value;
    var five = document.getElementById('5').value;
    var six = document.getElementById('6').value;
    var seven = document.getElementById('7').value;
    var eight = document.getElementById('8').value;
    var nine = document.getElementById('9').value;
	
	if(one == '0' && four == '0' && seven == '0' || two == '0' && five == '0' && eight == '0' || tree == '0' && six == '0' && nine == '0' || 
	one == '0' && two == '0' && tree == '0' || four == '0' && five == '0' && six == '0' || seven == '0' && eight == '0' && nine == '0' || 
	one == '0' && five == '0' && nine == '0' || seven == '0' && five == '0' && tree == '0'){
		
		forWinOrLost();
		avaUserWinOrLost();
		n();
		var lin = document.getElementById('line').style;
		
		if(one == '0' && four == '0' && seven == '0'){
			lin.display = 'block';
			lin.left = '230px';
		} else if(two == '0' && five == '0' && eight == '0'){
			lin.display = 'block';
		} else if(tree == '0' && six == '0' && nine == '0'){
			lin.display = 'block';
			lin.left = '455px';
		} else if(one == '0' && two == '0' && tree == '0'){
			lin.display = 'block';
			lin.width = '343px';
			lin.height = '6px';
			lin.left = '179px';
			lin.top = '65px';
		}else if(four == '0' && five == '0' && six == '0'){
			lin.display = 'block';
			lin.width = '343px';
			lin.height = '6px';
			lin.left = '179px';
			lin.top = '180px';
		}else if(seven == '0' && eight == '0' && nine == '0'){
			lin.display = 'block';
			lin.width = '343px';
			lin.height = '6px';
			lin.left = '179px';
			lin.top = '290px';
		}else if(one == '0' && five == '0' && nine == '0'){
			lin.display = 'block';
			lin.top = '-41px';
			lin.height = '460px';
			lin.transform = 'rotate(-44deg)';
		}else if(seven == '0' && five == '0' && tree == '0'){
			lin.display = 'block';
			lin.top = '-41px';
			lin.height = '460px';
			lin.transform = 'rotate(44deg)';
		}
		if(lang == 'ru'){
			
			MEGATEST.setTestDescription('Сожалеем! Ты проиграл слишком быстро! Возможно, ты не успел как надо подумать и разобраться. Попробуй еще раз! Мы верим, что твой хитрый и ловкий ум поможет тебе выиграть в следующий раз!');
		} else if(lang == 'en'){
			document.getElementById('reset').value = 'Play more';
			MEGATEST.setTestDescription('Sorry, but you lost too fast. Probably, you just didn\'t get it or had a bad luck. Try again! We believe that you will win next time!');
		}
		setTimeout(function(){document.getElementById('lost').style.display = 'block'; document.getElementById('reset').style.display = 'block';}, 2000); 
		
	} else if(one == 'x' && four == 'x' && seven == 'x' || two == 'x' && five == 'x' && eight == 'x' || tree == 'x' && six == 'x' && nine == 'x' || 
	one == 'x' && two == 'x' && tree == 'x' || four == 'x' && five == 'x' && six == 'x' || seven == 'x' && eight == 'x' && nine == 'x' || 
	one == 'x' && five == 'x' && nine == 'x' || seven == 'x' && five == 'x' && tree == 'x'){
		
		whoWin++;
		forWinOrLost();
		avaUserWinOrLost();
		pl();
		var lin = document.getElementById('line').style;
		if(one == 'x' && four == 'x' && seven == 'x'){
			lin.display = 'block';
			lin.left = '230px';
		} else if(two == 'x' && five == 'x' && eight == 'x'){
			lin.display = 'block';
		} else if(tree == 'x' && six == 'x' && nine == 'x'){
			lin.display = 'block';
			lin.left = '455px';
		} else if(one == 'x' && two == 'x' && tree == 'x'){
			lin.display = 'block';
			lin.width = '343px';
			lin.height = '6px';
			lin.left = '179px';
			lin.top = '65px';
		}else if(four == 'x' && five == 'x' && six == 'x'){
			lin.display = 'block';
			lin.width = '343px';
			lin.height = '6px';
			lin.left = '179px';
			lin.top = '180px';
		}else if(seven == 'x' && eight == 'x' && nine == 'x'){
			lin.display = 'block';
			lin.width = '343px';
			lin.height = '6px';
			lin.left = '179px';
			lin.top = '290px';
		}else if(one == 'x' && five == 'x' && nine == 'x'){
			lin.display = 'block';
			lin.top = '-41px';
			lin.height = '460px';
			lin.transform = 'rotate(-44deg)';
		}else if(seven == 'x' && five == 'x' && tree == 'x'){
			lin.display = 'block';
			lin.top = '-41px';
			lin.height = '460px';
			lin.transform = 'rotate(44deg)';
		}
		if(MEGATEST.getAppArgument("language") == 'en'){
		document.getElementById('reset').value = 'Play else';
}
		setTimeout(function(){document.getElementById('win').style.display = 'block'; document.getElementById('reset').style.display = 'block';}, 2000);
		
}

return whoWin;
}

function adaptability(){
	var bodyEl = document.getElementById('bodySize');
			var currentSize = window.screen.width;
			var currentResult = currentSize/700;
			bodyEl.style.transform = 'scale('+ currentResult + ')';
			window.onresize = function() {
			var winSize = bodyEl.offsetWidth;
			var result = winSize/700;
			bodyEl.style.transform = 'scale('+ result + ')';
			}
}

var random = 0;
function avaRandom(){
	 random = getRandom();
	var elementAva = document.getElementById('ava').style;
	
	elementAva.background = 'url(randomAva/' + random + '.jpg)';
	elementAva.backgroundSize  = 'cover';
	
	var nameRobot = document.getElementById('nameRandom');
	if(MEGATEST.getAppArgument("language") == 'ru'){
	if(random == 1){
		nameRobot.innerHTML = 'Анжелина<br> Джоли';
	} else if(random == 2 ){
		nameRobot.innerHTML = 'Маша<br> и медведь';
	}else if(random == 3 ){
		nameRobot.innerHTML = 'Игорь<br> Николаев';
	}else if(random == 4 ){
		nameRobot.innerHTML = 'Леонид<br> Якубович';
	}else if(random == 5 ){
		nameRobot.innerHTML = 'Анатолий<br> Васерман';
	}else if(random == 6){
		nameRobot.innerHTML = 'Дарт<br> Вердер';
	}} else if(MEGATEST.getAppArgument("language") == 'en'){
		if(random == 1){
		nameRobot.innerHTML = 'Angelina<br> Jolie';
	} else if(random == 2 ){
		nameRobot.innerHTML = 'Masha<br>  and Bear';
	}else if(random == 3 ){
		nameRobot.innerHTML = 'Igor<br>  Nikolayev';
	}else if(random == 4 ){
		nameRobot.innerHTML = 'Leonid<br>  Yakubovich';
	}else if(random == 5 ){
		nameRobot.innerHTML = 'Anatoly<br>  Wasserman';
	}else if(random == 6){
		nameRobot.innerHTML = 'Darth<br> Vader';
	}
	}
}

function forWinOrLost(){
	var elmentAva1 = document.getElementById('avaRobot1').style;
	var elmentAva2 = document.getElementById('avaRobot2').style;
	var elmentAva3 = document.getElementById('avaRobot3').style;
	
	elmentAva1.background = 'url(randomAva/' + random + '.jpg)';
	elmentAva2.background = 'url(randomAva/' + random + '.jpg)';
	elmentAva3.background = 'url(randomAva/' + random + '.jpg)';
	elmentAva1.backgroundSize  = 'cover';
	elmentAva2.backgroundSize  = 'cover';
	elmentAva3.backgroundSize  = 'cover';
	var nameRobot1 = document.getElementById('n1');
	var nameRobot2 = document.getElementById('n2');
	var nameRobot3 = document.getElementById('n3');
	if(lang == 'ru'){
	if(random == 1){
		nameRobot1.innerHTML = 'Анжелина<br> Джоли';
		nameRobot2.innerHTML = 'Анжелина<br> Джоли';
		nameRobot3.innerHTML = 'Анжелина<br> Джоли';
	} else if(random == 2){
		nameRobot1.innerHTML = 'Маша<br> и медведь';
		nameRobot2.innerHTML = 'Маша<br> и медведь';
		nameRobot3.innerHTML = 'Маша<br> и медведь';
	}else if(random == 3){
		nameRobot1.innerHTML = 'Игорь<br> Николаев';
		nameRobot2.innerHTML = 'Игорь<br> Николаев';
		nameRobot3.innerHTML = 'Игорь<br> Николаев';
	}else if(random == 4){
		nameRobot1.innerHTML = 'Леонид<br> Якубович';
		nameRobot2.innerHTML = 'Леонид<br> Якубович';
		nameRobot3.innerHTML = 'Леонид<br> Якубович';
	}else if(random == 5){
		nameRobot1.innerHTML = 'Анатолий<br> Васерман';
		nameRobot2.innerHTML = 'Анатолий<br> Васерман';
		nameRobot3.innerHTML = 'Анатолий<br> Васерман';
	}else if(random == 6){
		nameRobot1.innerHTML = 'Дарт<br> Вердер';
		nameRobot2.innerHTML = 'Дарт<br> Вердер';
		nameRobot3.innerHTML = 'Дарт<br> Вердер';
	}
} else if(lang == 'en'){
	if(random == 1){
		nameRobot1.innerHTML = 'Angelina<br> Jolie';
		nameRobot2.innerHTML = 'Angelina<br> Jolie';
		nameRobot3.innerHTML = 'Angelina<br> Jolie';
	} else if(random == 2){
		nameRobot1.innerHTML = 'Masha<br>  and Bear';
		nameRobot2.innerHTML = 'Masha<br>  and Bear';
		nameRobot3.innerHTML = 'Masha<br>  and Bear';
	}else if(random == 3){
		nameRobot1.innerHTML = 'Igor<br>  Nikolayev';
		nameRobot2.innerHTML = 'Igor<br>  Nikolayev';
		nameRobot3.innerHTML = 'Igor<br>  Nikolayev';
	}else if(random == 4){
		nameRobot1.innerHTML = 'Leonid<br>  Yakubovich';
		nameRobot2.innerHTML = 'Leonid<br>  Yakubovich';
		nameRobot3.innerHTML = 'Leonid<br>  Yakubovich';
	}else if(random == 5){
		nameRobot1.innerHTML = 'Anatoly<br>  Wasserman';
		nameRobot2.innerHTML = 'Anatoly<br>  Wasserman';
		nameRobot3.innerHTML = 'Anatoly<br>  Wasserman';
	}else if(random == 6){
		nameRobot1.innerHTML = 'Darth<br> Vader';
		nameRobot2.innerHTML = 'Darth<br> Vader';
		nameRobot3.innerHTML = 'Darth<br> Vader';
	}
}
}
function pl(){
	var col = countSteps();
	var place1 = document.getElementById('place');
	var place2 = document.getElementById('place2');
	if(lang == 'ru'){
	if(col == 5){
		place1.innerHTML = '1<br> место!';
		place2.innerHTML = '<br>ты выиграл<br> на '+ col + '-м ходу!';
		MEGATEST.setTestDescription('Поздравляем! Ты крайне умный и проницательный человек! Твой ум настолько изобретательный и ловкий, что ты смог победить своего соперника всего лишь на пятом ходу! С помощью природной хитрости и нажитой смышлёности ты стал лидером среди своих друзей и знакомых! С тобой приятно общаться, так как ты многое знаешь и умеешь делиться своими знаниями в легкой и непринужденной форме!');
	} else if(col == 7){
		place1.innerHTML = '2<br> место!';
		place2.innerHTML = '<br>ты выиграл<br> на '+ col + '-м ходу!';
		MEGATEST.setTestDescription('Поздравляем! Ты умный и смышлёный человек! В игре ты победил на седьмом ходу своего соперника, что говорит о твоей развитой интуиции и о том, что ты «с головой на плечах». Твои друзья и знакомые считают тебя сообразительным, и это чистая правда! Продолжай саморазвиваться и, возможно, ты сможешь войти в книгу рекордов Гиннесса как самый умный человек 21 столетия!');
	} else if(col == 9){
		place1.innerHTML = '3<br> место!';
		place2.innerHTML = '<br>ты выиграл<br> на '+ col + '-м ходу!';
		MEGATEST.setTestDescription('Ты победил своего соперника на девятом ходу! Возможно, это чистая случайность, а возможно у тебя такая тактика! В любом случае, мы тебя поздравляем! Если это не случайность, то можно сказать, что ты очень целенаправленный человек - знаешь, чего хочешь и медленно с помощью своей интуиции и проницательности идешь к цели.');
	}
	}else{
		if(col == 5){
		place1.innerHTML = '1<br> place!';
		place2.innerHTML = '<br>you won<br> the '+ col + 'th step!';
		MEGATEST.setTestDescription('Congratulations! You are very smart and intelligent! You are too good for this game cause you just won your opponent in the 5th round!');
	} else if(col == 7){
		place1.innerHTML = '2<br> place!';
		place2.innerHTML = '<br>you won<br> the '+ col + 'th step!';
		MEGATEST.setTestDescription('Congratulations! You are smart and intelligent person! You won in the 7th round. It means you know tactics and how to play this game. Your friends think you are nimble. Continuously develop yourself and you might get into the Guinness World Records!');
	} else if(col == 9){
		place1.innerHTML = '3<br> place!';
		place2.innerHTML = '<br>you won<br> the '+ col + 'th step!';
		MEGATEST.setTestDescription('You won your opponent in the 9th round! Probably it\'s just an accident, or do you have a special tactic for this game? Anyway, congratulations! You are a smart and intelligent person and always achieve your goals!');
	}
	}
	
}

function avaUserWinOrLost(){
	var elmentAva1 = document.getElementById('avaUser1').style;
	var elmentAva2 = document.getElementById('avaUser2').style;
	var elmentAva3 = document.getElementById('avaUser3').style;
	elmentAva1.background = 'url(' + urlAva + ')';
	elmentAva2.background = 'url(' + urlAva + ')';
	elmentAva3.background = 'url(' + urlAva + ')';
	elmentAva1.backgroundSize  = 'cover';
	elmentAva2.backgroundSize  = 'cover';
	elmentAva3.backgroundSize  = 'cover';
	
	var nameU1 = document.getElementById('u1');
	var nameU2 = document.getElementById('u2');
	var nameU3 = document.getElementById('u3');
	nameU1.innerHTML = decodeURIComponent(nameUser);
	nameU2.innerHTML = decodeURIComponent(nameUser);
	nameU3.innerHTML = decodeURIComponent(nameUser);
	
} 

function n(){
	var allName = nameUser
	if(lang == 'ru'){
	document.getElementById('losName').innerHTML = name + '<br> ты проиграл...';
	} else{
		document.getElementById('losName').innerHTML = name + '<br> you lose...';
	}
}

function reset(){
	document.getElementById('reset').style.display = 'none';
	document.getElementById('win').style.display = 'none';
	document.getElementById('lost').style.display = 'none';
	document.getElementById('line').style.display = 'none';
	document.getElementById('line').style.left = '343px';
	document.getElementById('line').style.width = '6px';
	document.getElementById('line').style.height = '334px';
	document.getElementById('line').style.top = '20px';
	document.getElementById('line').style.transform = 'rotate(0deg)';
	document.getElementById('noy').style.display = 'none';
	
	for(var i = 1; i<=9; i++){
		var ist = i.toString();
		document.getElementById(ist).value = '  ';
		document.getElementById(ist).style.backgroundImage = 'none';
		document.getElementById(ist).disabled = false;
	}
}