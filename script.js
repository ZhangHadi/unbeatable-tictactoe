let started = false
let first = null
let second = null
let now = null
let player1 = []
let player2 = []
let score = [0,0]

const start = (player) => {
	if(player === 'cpu'){
		setTurn('cpu','player')
	}
	if(player === 'player'){
		setTurn('player','cpu')
	}
	if(player === 'randomly'){
		const judgement = Math.round(Math.random())
		if(!judgement){
			setTurn('cpu','player')
		}else{
			setTurn('player','cpu')
		}
	}
	changeDisplay('lares','none','turn','','reset','')
	changeText('turn',first + ' is the first')
	if(first === 'cpu'){
		changeToCPU()
	}
}

const changeToCPU = () => {
	started = false
	now = 'cpu'
	let boxSelected
	
	
	
	if(player1.length > 1){
		if(player2.includes('box1') && player2.includes('box2') && !player1.includes('box3') ||
		   player2.includes('box7') && player2.includes('box5') && !player1.includes('box3') ||
		   player2.includes('box9') && player2.includes('box6') && !player1.includes('box3')
		){ boxSelected = 'box3' }
		else if(player2.includes('box1') && player2.includes('box3') && !player1.includes('box2') ||
				player2.includes('box8') && player2.includes('box5') && !player1.includes('box2') 
		){ boxSelected = 'box2' }
		else if(player2.includes('box3') && player2.includes('box2') && !player1.includes('box1') ||
				player2.includes('box9') && player2.includes('box5') && !player1.includes('box1') ||
				player2.includes('box4') && player2.includes('box7') && !player1.includes('box1')
		){ boxSelected = 'box1' }
		else if(player2.includes('box4') && player2.includes('box5') && !player1.includes('box6') ||
				player2.includes('box3') && player2.includes('box9') && !player1.includes('box6')
		){ boxSelected = 'box6' }
		else if(player2.includes('box4') && player2.includes('box6') && !player1.includes('box5') || 
				player2.includes('box2') && player2.includes('box8') && !player1.includes('box5') || 
				player2.includes('box1') && player2.includes('box9') && !player1.includes('box5') ||
				player2.includes('box3') && player2.includes('box7') && !player1.includes('box5') 
		){ boxSelected = 'box5' }
		else if(player2.includes('box5') && player2.includes('box6') && !player1.includes('box4') ||
				player2.includes('box1') && player2.includes('box7') && !player1.includes('box4')
		){ boxSelected = 'box4' }
		else if(player2.includes('box7') && player2.includes('box8') && !player1.includes('box9') || 
				player2.includes('box1') && player2.includes('box5') && !player1.includes('box9') || 
				player2.includes('box3') && player2.includes('box6') && !player1.includes('box9')
		){ boxSelected = 'box9' }
		else if(player2.includes('box7') && player2.includes('box9') && !player1.includes('box8') || 
				player2.includes('box2') && player2.includes('box5') && !player1.includes('box8')
		){ boxSelected = 'box8' }
		else if(player2.includes('box8') && player2.includes('box9') && !player1.includes('box7') ||
				player2.includes('box1') && player2.includes('box4') && !player1.includes('box7') ||
				player2.includes('box3') && player2.includes('box5') && !player1.includes('box7') 
		){ boxSelected = 'box7' }
		
		else if(player1.includes('box1') && player1.includes('box2') && !player2.includes('box3') ||
				player1.includes('box7') && player1.includes('box5') && !player2.includes('box3') ||
				player1.includes('box9') && player1.includes('box6') && !player2.includes('box3')
		){ boxSelected = 'box3' }
		else if(player1.includes('box1') && player1.includes('box3') && !player2.includes('box2') ||
				player1.includes('box8') && player1.includes('box5') && !player2.includes('box2') 
		){ boxSelected = 'box2' }
		else if(player1.includes('box3') && player1.includes('box2') && !player2.includes('box1') ||
				player1.includes('box9') && player1.includes('box5') && !player2.includes('box1') ||
				player1.includes('box4') && player1.includes('box7') && !player2.includes('box1')
		){ boxSelected = 'box1' }
		else if(player1.includes('box4') && player1.includes('box5') && !player2.includes('box6') ||
				player1.includes('box3') && player1.includes('box9') && !player2.includes('box6')
		){ boxSelected = 'box6' }
		else if(player1.includes('box4') && player1.includes('box6') && !player2.includes('box5') || 
				player1.includes('box2') && player1.includes('box8') && !player2.includes('box5') || 
				player1.includes('box1') && player1.includes('box9') && !player2.includes('box5') ||
				player1.includes('box3') && player1.includes('box7') && !player2.includes('box5') 
		){ boxSelected = 'box5' }
		else if(player1.includes('box5') && player1.includes('box6') && !player2.includes('box4') ||
				player1.includes('box1') && player1.includes('box7') && !player2.includes('box4')
		){ boxSelected = 'box4' }
		else if(player1.includes('box7') && player1.includes('box8') && !player2.includes('box9') || 
				player1.includes('box1') && player1.includes('box5') && !player2.includes('box9') || 
				player1.includes('box3') && player1.includes('box6') && !player2.includes('box9')
		){ boxSelected = 'box9' }
		else if(player1.includes('box7') && player1.includes('box9') && !player2.includes('box8') || 
				player1.includes('box2') && player1.includes('box5') && !player2.includes('box8')
		){ boxSelected = 'box8' }
		else if(player1.includes('box8') && player1.includes('box9') && !player2.includes('box7') ||
				player1.includes('box1') && player1.includes('box4') && !player2.includes('box7') ||
				player1.includes('box3') && player1.includes('box5') && !player2.includes('box7') 
		){ boxSelected = 'box7' }
		
		
		else{
			boxSelected= 'box'+Math.round(Math.random()*8+1)	
			while(player1.includes(boxSelected) || player2.includes(boxSelected)){
				boxSelected= 'box'+Math.round(Math.random()*8+1)
			}
		}
		console.log('AI')
	}else{
		if(player1.length === 1 && first === 'player'){
			if(player1.includes('box1') || player1.includes('box7') || player1.includes('box3') || player1.includes('box9')){
				boxSelected = 'box5'
				console.log('AI')
			}else if(player1.includes('box5')){
				boxSelected= 'box'+Math.round(Math.random()*8+1)	
				while(boxSelected === 'box5' || boxSelected === 'box2' || boxSelected === 'box4' || boxSelected === 'box6' || boxSelected === 'box8'){
					boxSelected= 'box'+Math.round(Math.random()*8+1)
				}
				console.log('AI')
			}else{
				boxSelected= 'box'+Math.round(Math.random()*8+1)	
				while(player1.includes(boxSelected) || player2.includes(boxSelected)){
					boxSelected= 'box'+Math.round(Math.random()*8+1)
				}
				console.log('Randomity')
			}
		}else{
			boxSelected= 'box'+Math.round(Math.random()*8+1)	
			while(player1.includes(boxSelected) || player2.includes(boxSelected)){
				boxSelected= 'box'+Math.round(Math.random()*8+1)
			}
			console.log('Randomity')
		}
	}
	
	
	if(now === 'cpu'){
		player2.push(boxSelected)
		if(first === 'cpu'){
			changeImage(boxSelected,'./Picture/circle.png')
		}
		if(second === 'cpu'){
			changeImage(boxSelected,'./Picture/cross.png')
		}
		now = 'player'
		started = true
		changeDisplay('turn','none')
		winningConditionCheck()
	}
}

const clicked = (box) => {
	if(!player1.includes(box) && !player2.includes(box))
	if(started){
		if(now === 'player'){
			player1.push(box)
			if(first === 'player'){
				changeImage(box,'./Picture/circle.png')
			}
			if(second === 'player'){
				changeImage(box,'./Picture/cross.png')
			}	
		}
		winningConditionCheck()
		if(now !== null){
			changeToCPU()
		}
	}
	
}

const winningConditionCheck = () => {
	
	if(
		player1.includes('box1') && player1.includes('box2') && player1.includes('box3') ||
		player1.includes('box1') && player1.includes('box5') && player1.includes('box9') ||
		player1.includes('box1') && player1.includes('box4') && player1.includes('box7') ||
		player1.includes('box2') && player1.includes('box5') && player1.includes('box8') ||
		player1.includes('box3') && player1.includes('box6') && player1.includes('box9') || 
		player1.includes('box3') && player1.includes('box5') && player1.includes('box7') ||
		player1.includes('box4') && player1.includes('box5') && player1.includes('box6') ||
		player1.includes('box7') && player1.includes('box8') && player1.includes('box9') 
	){
		now = null
		changeDisplay('turn','')
		changeText('turn','The Winner is the Player')
	}
	else if(
		player2.includes('box1') && player2.includes('box2') && player2.includes('box3') ||
		player2.includes('box1') && player2.includes('box5') && player2.includes('box9') ||
		player2.includes('box1') && player2.includes('box4') && player2.includes('box7') ||
		player2.includes('box2') && player2.includes('box5') && player2.includes('box8') ||
		player2.includes('box3') && player2.includes('box6') && player2.includes('box9') || 
		player2.includes('box3') && player2.includes('box5') && player2.includes('box7') ||
		player2.includes('box4') && player2.includes('box5') && player2.includes('box6') ||
		player2.includes('box7') && player2.includes('box8') && player2.includes('box9') 
	){
		now = null
		console.log(player2)
		changeDisplay('turn','')
		changeText('turn','The Winner is the CPU')
	}else{	
		let merges = player1.concat(player2)
		if(merges.length === 9){
			now = null
			console.log(merges)
			changeDisplay('turn','')
			changeText('turn','The Game Is Ended With A Draw')
		}
	}
	
}

const reset = () => {
	now = null
	started = false
	player1 = []
	player2 = []
	changeDisplay('lares','','turn','none','reset','none')	
	for(j=1;j<=9;j++){
		changeImage('box'+j,'./Picture/empty.png')
	}
	
}
const changeText = (id,value) => {
	document.getElementById(id).innerHTML = value
}
const changeDisplay = (id,value,id2,value2,id3,value3) => {
	if(id2 === undefined && value2 === undefined && id3 === undefined && value3 === undefined ){
		document.getElementById(id).style.display = value
	}else{
		document.getElementById(id).style.display = value
		document.getElementById(id2).style.display = value2
		document.getElementById(id3).style.display = value3
	}
}
const changeImage = (id,value) => {
	document.getElementById(id).src = value
}
const setTurn = (theFirst,theSecond) => {
	first = theFirst
	second = theSecond
	started = true
	now = first
}
