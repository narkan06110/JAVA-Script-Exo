floor = prompt('Bievenue dans ma pyramide ! Combien d\'étages veux-tu?')
nbChar = floor;
if(floor<1){
	console.log('choisi un nombre positif stp')
}else{
	for(let i = 1; i<= floor; i++) {
		space ="";
		for(let step = i; step< floor; step++){
			space += " ";
		}
		brique = "";
		for(let step = 0; step<i; step++){
			brique += "=";
		}
		console.log(space+brique)
	}
}