const startTime = 0
const start = 0
const end = 0
const diff = 0
window.onload = chronoStart();
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	let sec = diff.getSeconds()
    let min = diff.getMinutes()
    
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	
	document.getElementById("chronotime").innerHTML =  min + ":" + sec 
}
function chronoStart(){
	start = new Date()
	chrono()
}

function chronoStop(){
	if (gameOver == true) {
		document.getElementById('chronotime').value = "stop";
	}
}