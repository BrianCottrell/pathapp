var x, y, width,
	currentPoint,
	lastPoint,
	distance,
	distanceTotal;
var saveColor,
	dragging,
	dragX, dragY;
var scale = 29.9484914796,
	groups = 48,
	highscoreX = '85%', highscoreY = '50%', highscoreColor = 'rgba(0,50,100,0.8)',
	loginX = '85%', loginY = '0%', loginColor = 'rgba(200,100,0,0.4)',
	menuX = '2%', menuY = '30%', menuColor = 'rgba(0,200,50,0.6)',
	preferencesX = '6%', preferencesY = '6%', preferencesColor = 'rgba(200,200,0,0.7)',
	titleX = '35%', titleY = '0%', titleColor = 'rgba(0,100,200,0.6)';
var pointsData = getPoints();
var pointsArray = [],
	pathArray = [],
	groupTotal = [];
var map = document.getElementsByClassName('map')[0];

function drawPoints(){
	pointsArray.length = pointsData.length;
	for(var i = 0; i < pointsData.length; i++){
		x = pointsData[i][0];
		y = pointsData[i][1];
		width = map.offsetWidth;
		pointsArray[i] = document.createElement('div');
		pointsArray[i].classList.add('point');
		pointsArray[i].style.backgroundColor = groupColor(pointsData[i][2]);
		map.appendChild(pointsArray[i]);
		pointsArray[i].style.marginLeft = (x*width/100-pointsArray[i].offsetWidth/2)+'px';
		pointsArray[i].style.marginTop = ((y-50)*width/100-pointsArray[i].offsetHeight/2)+'px';
		pointsArray[i].addEventListener('mouseover', addFocus, false)
		pointsArray[i].addEventListener('mouseout', removeFocus, false)
		pointsArray[i].addEventListener('click', selectPoint, false);
	}
}

function redrawPoints(){
	for(var i = 0; i < pointsData.length; i++){
		x = pointsData[i][0];
		y = pointsData[i][1];
		width = map.offsetWidth;
		pointsArray[i].style.marginLeft = (x*width/100-pointsArray[i].offsetWidth/2)+'px';
		pointsArray[i].style.marginTop = ((y-50)*width/100-pointsArray[i].offsetHeight/2)+'px';
	}
}

function drawLine(point1x, point1y, point2x, point2y){
	var x1 = point1x;
	var y1 = point1y;
	var x2 = point2x;
	var y2 = point2y;
	var leftOffset;
	var rotation;
	line = document.createElement('div');
	line.classList.add('line');
	line.style.width = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))+'%'
	leftOffset = (x1-(parseFloat(line.style.width.substr(0,line.style.width.length-1))-(x2-x1))/2);	
	line.style.marginLeft = leftOffset+'%';
	line.style.marginTop = ((y1-50)+(y2-y1)/2)+'%';
	rotation = Math.atan((y2-y1)/(x2-x1));
	line.style.transform = 'rotate('+rotation+'rad)';
	line.style.mozTransform = 'rotate('+rotation+'rad)';
	line.style.webkitTransform = 'rotate('+rotation+'rad)';
	map.appendChild(line);
}

function addFocus(){
	saveColor = this.style.backgroundColor;
	this.style.backgroundColor = 'orange';
}

function removeFocus(){
	this.style.backgroundColor = saveColor;
}

function selectPoint(){
	var xSquared, ySquared
	this.style.border = '3px solid yellow';
	this.style.marginLeft = parseInt(this.style.marginLeft.substr(0,this.style.marginLeft.length-2))-3+'px';
	this.style.marginTop = parseInt(this.style.marginTop.substr(0,this.style.marginTop.length-2))-3+'px';
	pathArray.push(pointsData[pointsArray.indexOf(this)]);
	if(pathArray.length > 1){
		distanceTotal = 0;
		for(var i = 1; i < pathArray.length; i++){
			xSquared = Math.pow(pathArray[i][0]-pathArray[i-1][0],2);
			ySquared = Math.pow(pathArray[i][1]-pathArray[i-1][1],2)
			distanceTotal+=Math.sqrt(xSquared+ySquared)*scale;
		}
		var x1 = pathArray[pathArray.length-1][0];
		var y1 = pathArray[pathArray.length-1][1];
		var x2 = pathArray[pathArray.length-2][0];
		var y2 = pathArray[pathArray.length-2][1];
		drawLine(x1, y1, x2, y2);
	}
	if(distanceTotal){
		document.getElementsByClassName('distance')[0].innerHTML = Math.round(distanceTotal);
		document.getElementsByClassName('distance')[1].value = Math.round(distanceTotal);
	}
	checkCompeteness();
}

function setIndex(){
	if(localStorage.menuX && localStorage.menuY){
		menuX = JSON.parse(localStorage.menuX);
		menuY = JSON.parse(localStorage.menuY);
	}
	document.getElementsByClassName('menu')[0].style.marginTop = menuY;
	document.getElementsByClassName('menu')[0].style.marginLeft = menuX;
	document.getElementsByClassName('menu')[0].addEventListener('mousedown', startDrag);
	document.getElementsByClassName('menu')[0].addEventListener('mousemove', drag);
	document.getElementsByClassName('menu')[0].addEventListener('mouseup', endDrag);

	if(localStorage.titleX && localStorage.titleY){
		titleX = JSON.parse(localStorage.titleX);
		titleY = JSON.parse(localStorage.titleY);
	}
	document.getElementsByClassName('title')[0].style.marginTop = titleY;
	document.getElementsByClassName('title')[0].style.marginLeft = titleX;
	document.getElementsByClassName('title')[0].addEventListener('mousedown', startDrag);
	document.getElementsByClassName('title')[0].addEventListener('mousemove', drag);
	document.getElementsByClassName('title')[0].addEventListener('mouseup', endDrag);

	if(localStorage.loginX && localStorage.loginY){
		loginX = JSON.parse(localStorage.loginX);
		loginY = JSON.parse(localStorage.loginY);
	}
	document.getElementsByClassName('login')[0].style.marginTop = loginY;
	document.getElementsByClassName('login')[0].style.marginLeft = loginX;
	document.getElementsByClassName('login')[0].addEventListener('mousedown', startDrag);
	document.getElementsByClassName('login')[0].addEventListener('mousemove', drag);
	document.getElementsByClassName('login')[0].addEventListener('mouseup', endDrag);

	if(localStorage.preferencesX && localStorage.preferencesY){
		preferencesX = JSON.parse(localStorage.preferencesX);
		preferencesY = JSON.parse(localStorage.preferencesY);
	}
	document.getElementsByClassName('preferences')[0].style.marginTop = preferencesY;
	document.getElementsByClassName('preferences')[0].style.marginLeft = preferencesX;
	document.getElementsByClassName('preferences')[0].addEventListener('mousedown', startDrag);
	document.getElementsByClassName('preferences')[0].addEventListener('mousemove', drag);
	document.getElementsByClassName('preferences')[0].addEventListener('mouseup', endDrag);

	if(localStorage.highscoreX && localStorage.highscoreY){
		highscoreX = JSON.parse(localStorage.highscoreX);
		highscoreY = JSON.parse(localStorage.highscoreY);
	}
	document.getElementsByClassName('highscore')[0].style.marginTop = highscoreY;
	document.getElementsByClassName('highscore')[0].style.marginLeft = highscoreX;
	document.getElementsByClassName('highscore')[0].addEventListener('mousedown', startDrag);
	document.getElementsByClassName('highscore')[0].addEventListener('mousemove', drag);
	document.getElementsByClassName('highscore')[0].addEventListener('mouseup', endDrag);

	if(localStorage.storeColor){
		var setColor = JSON.parse(localStorage.storeColor);
		highscoreColor = setColor;
		menuColor = setColor;
		loginColor = setColor;
		preferencesColor = setColor;
		titleColor = setColor;
	}
	document.getElementsByClassName('highscore')[0].style.backgroundColor = highscoreColor;
	document.getElementsByClassName('login')[0].style.backgroundColor = loginColor;
	document.getElementsByClassName('menu')[0].style.backgroundColor = menuColor;
	document.getElementsByClassName('preferences')[0].style.backgroundColor = preferencesColor;
	document.getElementsByClassName('title')[0].style.backgroundColor = titleColor;

	if(localStorage.storeBorder){
		var setBorder = JSON.parse(localStorage.storeBorder);
		document.getElementsByClassName('highscore')[0].style.border = storeBorder;
		document.getElementsByClassName('login')[0].style.border = storeBorder;
		document.getElementsByClassName('menu')[0].style.border = storeBorder;
		document.getElementsByClassName('preferences')[0].style.border = storeBorder;
		document.getElementsByClassName('title')[0].style.border = storeBorder;
	}

	document.getElementsByClassName('green')[0].addEventListener('click', storeGreen);
	document.getElementsByClassName('bordered')[0].addEventListener('click', storeBorder);
}

function storeGreen(){
	localStorage.storeColor = JSON.stringify('rgba(0,250,0,0.75)');
	setIndex();
}

function storeBorder(){
	localStorage.storeBorder = JSON.stringify('2px solid rgba(150,150,250,0.85)');
	setIndex();
}

function startDrag(){
	dragX = event.clientX;
	dragY = event.clientY;
	dragging = true;
}

function drag(){
	if(dragging){
		positionY = parseFloat(this.style.marginTop.substr(0,this.style.marginTop.length-1));
		positionX = parseFloat(this.style.marginLeft.substr(0,this.style.marginLeft.length-1));
		positionX+=100*(event.clientX-dragX)/window.innerWidth;
		positionY+=100*(event.clientY-dragY)/window.innerWidth;
		this.style.marginTop = positionY+'%';
		this.style.marginLeft = positionX+'%';
		dragX = event.clientX;
		dragY = event.clientY;
	}
}

function endDrag(){
	dragging = false
	if(this.id == 'menu'){
		localStorage.menuY = JSON.stringify(this.style.marginTop);
		localStorage.menuX = JSON.stringify(this.style.marginLeft);
	}else if(this.id == 'title'){
		localStorage.titleY = JSON.stringify(this.style.marginTop);
		localStorage.titleX = JSON.stringify(this.style.marginLeft);
	}else if(this.id == 'login'){
		localStorage.loginY = JSON.stringify(this.style.marginTop);
		localStorage.loginX = JSON.stringify(this.style.marginLeft);
	}else if(this.id == 'preferences'){
		localStorage.preferencesY = JSON.stringify(this.style.marginTop);
		localStorage.preferencesX = JSON.stringify(this.style.marginLeft);
	}else if(this.id == 'highscore'){
		localStorage.highscoreY = JSON.stringify(this.style.marginTop);
		localStorage.highscoreX = JSON.stringify(this.style.marginLeft);
	}
}

function checkCompeteness(){
	for(var i = 0; i < pathArray.length; i++){
		if(groupTotal.indexOf(pathArray[i][2]) < 0){
			groupTotal.push(pathArray[i][2]);
		}
	}
	if(pathArray.length >= groups){
		document.getElementsByClassName('enter')[0].style.display = 'inline';
	}else{
		document.getElementsByClassName('enter')[0].style.display = 'none';
	}
}

function groupColor(number){
	var colorValue;
	var group = number;
	if(group%6 == 0){
		colorValue = (3*group).toString()+','+(255-3*group).toString()+','+(255-3*group).toString();
	}else if(group%6 == 1){
		colorValue = (255-3*group).toString()+','+(3*group).toString()+','+(3*group).toString();
	}else if(group%6 == 2){
		colorValue = (255-3*group).toString()+','+(255-3*group).toString()+','+(3*group).toString();
	}else if(group%6 == 3){
		colorValue = (3*group).toString()+','+(3*group).toString()+','+(255-3*group).toString();
	}else if(group%6 == 4){
		colorValue = (255-3*group).toString()+','+(3*group).toString()+','+(255-3*group).toString();
	}else{
		colorValue = (3*group).toString()+','+(255-3*group).toString()+','+(3*group).toString();
	}
	return 'rgb('+colorValue+')';
}

window.onresize = function(event){
	redrawPoints();
}

drawPoints();
setIndex();