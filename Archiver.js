//This file exists in order to keep track of all the main data for everyone 
const USERS_TO_TRACK = [Spartakusbund, TheF7Rook, JayTDemi, PineappleXXXL, SkyrorYaotzun, mamamarie21]
function Archiver(){
	this.peopleBeingTracked = [];  

  	function parseData(combatLog){
		console.log(combatLog);
 	}	 
}

function getArchiver(){
	if(archiver === null)
    	archiver = new Archiver();
  	console.log("Retrieved Archiver Successfully!");
	return archiver;
}
