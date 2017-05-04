	
	buttonCatchMoney = '';
	textOnResultImage = '';
	textIfUserLost = '';
	imageIfUserLost = "";
	popUpIfUserPoor = '';
	textCanvasWin = '';
	textCanvasWin2 = '';
	textCanvasLost = '';
	textCanvasLost2 = '';
	buttonPlayAdain = '';
	textManualStart = '';
	buttonStartGame = '';

BaseAbstractApp.prototype.readyResources = function() {
    var curTime = new Date().getTime();
    
    if (curTime > this.prop.startTime + this.showTimeAnalizing) {
        MEGATEST.onReadyToShow(false);
        
       
    } else {
        var newDeley = this.showTimeAnalizing - (curTime - this.prop.startTime);
        var _self = this;
        
        setTimeout(function() {
            MEGATEST.onReadyToShow(false);
        }, newDeley);
    }
};

BaseAbstractApp.prototype._run = function () {
		this.prop = {
        startTime: new Date().getTime()
    };

	urlAva = this.userData.userAvatar;
	nameUser = this.userData.userName;
	carrentBallance = this.userData.userBalance;
	lang = MEGATEST.getAppArgument("language");
	translater(lang);
	
	document.getElementById('textPopup').innerHTML += popUpIfUserPoor;
	document.getElementById('catchMyMoney').innerHTML = buttonCatchMoney;
	document.getElementById('textPopUpStartGame').innerHTML = textManualStart;
	document.getElementById('buttonPopUpStartGame').innerHTML = buttonStartGame;
	
	
	var fullName = decodeURIComponent(nameUser);
	name = nameUser.split(' ')[0];
	
	var popupUserPoor = document.getElementById('userPoor');
	if(carrentBallance<25){
		popupUserPoor.style.display = 'block';
	} else{
		document.getElementById('popUpStartGame').style.display = 'block';
	}

		this.readyResources();
	
}


BaseAbstractApp.prototype.getScreenshot = function () {
    try {
        data64 = canvasElement.toDataURL("image/jpeg");
    } catch (err) {
        console.log(err);
    }

    return data64;
}


new BaseAbstractApp();

function lottery (obj) {
	
			balanceUsers(obj);
			whoLost(obj);
			afterLost(obj);
			if(this.balance>=0) {
				document.getElementById('catchMyMoney').disabled = false;
			} 
	
		
    }

    function randomElement() {
        return Math.floor(Math.random()*3);
    }

    function blockAllElements() {
        var allInput = document.getElementsByTagName('input');
		for(var i = 0; i<=allInput.length-1; i++) {
            allInput[i].disabled = true;
        }

    }

    function whoLost(obj) {
        var idLost = randomElement();
        var classCurrent = document.getElementsByClassName(obj.className);
        classCurrent[idLost].value = 'Lost';
        if(obj.value !='Lost'){
            obj.style.backgroundImage = "url('buttons/bagWithCoins.png')";
        }

        for(var i=0;i<=classCurrent.length-1;i++){
            if(classCurrent[i]!= classCurrent[idLost]){
                classCurrent[i].value = 'next';
            }
        }

    }


    function openNextLine(obj) {
        for (var i = 0; i <= document.getElementsByClassName('twoLine').length - 1; i++) {
            if (obj.className == 'oneLine') {
                document.getElementsByClassName('twoLine')[i].disabled = false;
				document.getElementsByClassName('twoLine')[i].style.animationPlayState = 'running';
                document.getElementsByClassName('oneLine')[i].disabled = true;
				document.getElementsByClassName('oneLine')[i].style.animationPlayState = 'paused';
            } else if (obj.className == 'twoLine') {
                document.getElementsByClassName('treeLine')[i].disabled = false;
				document.getElementsByClassName('treeLine')[i].style.animationPlayState = 'running';
                document.getElementsByClassName('twoLine')[i].disabled = true;
				document.getElementsByClassName('twoLine')[i].style.animationPlayState = 'paused';
            } else if (obj.className == 'treeLine') {
                document.getElementsByClassName('fourLine')[i].disabled = false;
				document.getElementsByClassName('fourLine')[i].style.animationPlayState = 'running';
                document.getElementsByClassName('treeLine')[i].disabled = true;
				document.getElementsByClassName('treeLine')[i].style.animationPlayState = 'paused';
            } else if (obj.className == 'fourLine') {
                document.getElementsByClassName('fiveLine')[i].disabled = false;
				document.getElementsByClassName('fiveLine')[i].style.animationPlayState = 'running';
                document.getElementsByClassName('fourLine')[i].disabled = true;
				document.getElementsByClassName('fourLine')[i].style.animationPlayState = 'paused';
            } else if (obj.className == 'fiveLine') {
                document.getElementsByClassName('sixLine')[i].disabled = false;
				document.getElementsByClassName('sixLine')[i].style.animationPlayState = 'running';
                document.getElementsByClassName('fiveLine')[i].disabled = true;
				document.getElementsByClassName('fiveLine')[i].style.animationPlayState = 'paused';
            } else if (obj.className == 'sixLine') {
                document.getElementsByClassName('sevenLine')[i].disabled = false;
				document.getElementsByClassName('sevenLine')[i].style.animationPlayState = 'running';
                document.getElementsByClassName('sixLine')[i].disabled = true;
				document.getElementsByClassName('sixLine')[i].style.animationPlayState = 'paused';
            } 
        }
		if (obj.className == 'sevenLine') {
				sendPOST(this.balance);
                showImageResult(this.balance);
            }

    }
balance = 0;
    function balanceUsers(clickObj) {
        this.balance += Number(clickObj.value);
        totalCoins.innerHTML = this.balance + " <img src='buttons/coinsButton.png' style='top: 5px; position:relative;'>";

    }

    function afterLost(obj) {
        if(obj.value == 'Lost'){
            obj.style.backgroundImage = imageIfUserLost;
            blockAllElements();
            this.balance = 0;
            totalCoins.innerHTML = this.balance + " <img src='buttons/coinsButton.png' style='top: 5px; position:relative;'>";
            for(var i=0; i<=document.getElementsByTagName('input').length-1;i++){
                if(document.getElementsByTagName('input')[i].value == 'next'){
                    document.getElementsByTagName('input')[i].style.backgroundImage = "url('buttons/bagWithCoins.png')";
                }
                if(document.getElementsByTagName('input')[i].value != 'next' && document.getElementsByTagName('input')[i].value != 'Lost') {
                    whoLost(document.getElementsByTagName('input')[i]);
                }
            }
            showImageResult(this.balance);
        } else{
            openNextLine(obj);
        }
    }

    function giveMyMoney() {
        showImageResult(this.balance);
		
		document.getElementById('catchMyMoney').removeAttribute('onclick');
		sendPOST(this.balance);
		this.balance = 0;
        totalCoins.innerHTML = this.balance + " <img src='buttons/coinsButton.png' style='top: 5px; position:relative;'>";
    }

    function sendPOST (sum) {
      
		document.getElementById('main').value = sum;
		document.getElementById('buttonSubmit').click();
    }

	forma.addEventListener('submit', function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        var o = new XMLHttpRequest;
        o.open("POST", "/bonus/update-balance", !0),
        o.onload = function() {
            if (this.status >= 200 && this.status < 400) {
				parent.Bonus.balanceRefresh();
				
            }
        },
        o.send(dataForm)
    }, false)

function showImageResult(currentBal) {
	createCanvas(currentBal);
    setTimeout(function () {
		
		var avatar = document.getElementById('ava');
		var imageResult = document.getElementById('textResult');
		var bgImage = document.getElementById('result');
		var buttonReset = document.getElementById('reset');
		buttonReset.innerHTML = buttonPlayAdain;
		buttonReset.style.display = 'block';
		bgImage.style.display = 'block';
		avatar.src = urlAva;
		avatar.style.display = 'block';
		
		imageResult.style.display = 'block';
		if(currentBal>0){
        imageResult.innerHTML = '<strong>'+ name + textOnResultImage + '</strong>' + '<strong style="color:#ffca31">' + currentBal + '</strong>' + ' '+ '<img src="buttons/coinsButton.png" style="top:50px; position:relative; height:25px; top:3px; right:0px;">';
		MEGATEST.onResult();
		} else{ 
		imageResult.innerHTML = textIfUserLost;
		MEGATEST.onResult();	
		}
    }, 2000);
}


 if(this.balance>0) {
        document.getElementById('catchMyMoney').disabled = false;
    }
    

	function translater(lang){
		if(lang == 'ru'){
		buttonCatchMoney = 'ЗАБРАТЬ МОНЕТЫ';
		textOnResultImage = ', ты молодец!<br> Выиграл аж ';
		textIfUserLost = '<strong>Сочувствую... Ты проиграл!<br> Пробуй еще!</strong>';
		imageIfUserLost = "url('buttons/proigral.png')";
		popUpIfUserPoor = '<br> <br>К сожалению, у Вас недостаточно<br> монет для прохождения теста.<br> <strong>Нажмите кнопку "Пополнить"<br> в правом верхнем углу.</strong><br><br>';
		textCanvasWin = ', ты молодец!';
		textCanvasWin2 = 'Выиграл аж ';
		textCanvasLost = 'Сочувствую... Ты проиграл!';
		textCanvasLost2 = 'Пробуй еще!';
		buttonPlayAdain = 'Сыграть еще';
		textManualStart = '<strong><br><br>Это игра, где всё зависит от интуиции: <br>угадывая правильные клетки начиная с "5 монет" <br>Вы поднимаетесь всё выше, зарабатывая больше денег. <br>Главное - вовремя остановиться. <br>Всегда можно забрать свой выигрыш <br>в виде монет которые начисляться на балланс. <br>Каждая игра стоит 25 монет.</strong>';
		buttonStartGame = 'Начать игру за 25 ';
		} else{
		buttonCatchMoney = 'GET THE COINS';
		textOnResultImage = ', good job!<br> You won ';
		textIfUserLost = '<strong>Sorry for your lost... <br>Try again!</strong>';
		imageIfUserLost = "url('buttons/gameOwer.png')";
		popUpIfUserPoor = '<br> <br>Sorry, but you don\'t have enough<br> coins to play the game.<br> <strong>Press "Refill"<br> button in header.</strong><br>';
		textCanvasWin = ', good job!';
		textCanvasWin2 = 'You won ';
		textCanvasLost = 'Sorry for your lost...';
		textCanvasLost2 = 'Try again!';
		buttonPlayAdain = 'Play again';
		textManualStart = '<strong><br><br>This game is all about intuition: <br>Starting with 5 coins by clicking on the right box <br>you go further and further and  have a chance to win <br>more money with every row. <br>But don\'t forget to stop at the right time. <br>You can withdraw money any time you want.<br>Every game costs 25 coins.</strong>';
		buttonStartGame = 'Start game for 25';
		}
		
	}
	
	
	function startGame(){
	sendPOST(-25);	
	document.getElementById('popUpStartGame').style.display = 'none';
	var elInput = document.getElementsByTagName('input'); 
	for(var i=0; i <= elInput.length-1; i++){
		if(elInput[i].className != 'onServ'){
			elInput[i].setAttribute('onclick', 'lottery(this)');
		}
		
	}
	
	}
	
	function resetGame(){
		reset.style.boxShadow = 'none';
		MEGATEST.onReload();
	}

	

	function createCanvas(ballanceUser){
		canvasElement = document.getElementById('canvas');
		var ctx = canvasElement.getContext("2d");

			
	new CompilerImage(ctx, {"url": "images/bgRes.png"}).imgAdd(function() {
	new CompilerImage(ctx, {
			"url": urlAva,
			"left": 265,
			"top": 53,
			"width": 170,
			"height": 170,
			"strokeColor": "#fff",
			"view": "circle"
		}
	).imgAdd(function() {
		var left = null;
		var balLeft = null;
		if(ballanceUser>=0 && ballanceUser<=9 && lang =='ru'){left = 445} 
			else if(ballanceUser>=10 && ballanceUser<=99 && lang =='ru'){left = 465}
			else if(ballanceUser>=100 && lang =='ru'){left=475} 
			else if(ballanceUser>=0 && ballanceUser<=9 && lang =='en'){left = 400} 
			else if(ballanceUser>=10 && ballanceUser<=99 && lang =='en'){left = 420}
			else if(ballanceUser>=100 && lang =='en'){left=430};
		if(ballanceUser>0){
		ctx.font = "bold 25px Arial";
		ctx.fillStyle = 'white';
		ctx.fillText(name + textCanvasWin,240,280);
		ctx.fillText(textCanvasWin2, 270, 310);
		ctx.font = "bold 25px Arial";
		ctx.fillStyle = '#ffca31';
		if(lang == 'en'){ctx.fillText(ballanceUser,380,310);}else{ctx.fillText(ballanceUser,425,310);}
		new CompilerImage(ctx, {
			"url": "buttons/coinsButton.png",
			"left": left,
			"top": 288,
			"width": 25,
			"height": 25
		}
	).imgAdd(function() {});
		} else{
			ctx.font = "bold 25px Arial";
			ctx.fillStyle = 'white';
			if(lang=='en'){
			ctx.fillText(textCanvasLost + textCanvasLost2,180,280);
			} else{
			ctx.fillText(textCanvasLost,180,280);
			ctx.fillText(textCanvasLost2,280, 310);
			}
		}
	});
});
	}
	