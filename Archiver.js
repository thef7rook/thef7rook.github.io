//This file exists in order to keep track of all the main data for everyone 
archiver;
const USERS_TO_TRACK = [Spartakusbund, TheF7Rook, JayTDemi, PineappleXXXL, SkyrorYaotzun, mamamarie21]
function Archiver(){
  peopleBeingTracked = [];  
}

function getArchiver(){
  if(archiver === null)
    archiver = new Archiver();
  return archiver;
}
