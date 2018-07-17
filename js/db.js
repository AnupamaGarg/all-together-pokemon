//BONUS METHODS - Check em out.
getPokemon = (whichOne) => {
   return pokemon[whichOne];
}

setPokemon = (pokemonObj) => {
   const dbObjToString = JSON.stringify(pokemonObj);
   localStorage.setItem('mods-pokemon', dbObjToString);
}

let makePokemonObj = (name, thumbnail, copy, link) => {
   const newPokemon = {
      name: name,
      thumbnail: thumbnail,
      copy: copy,
      link: link,
   }
   return newPokemon
}



//need to improve
//function that adds to db and then
//make function that adds a visit to the db

populateUserData = (totalVisits = 1) => {
   let currentVisits = totalVisits;
   let userObj = {
      totalVisits: currentVisits,
   }
   const dbObjToString = JSON.stringify(userObj);
   localStorage.setItem('pokemon-user', dbObjToString);
}

updateUser = () => {
   console.log("updateUser");
   //get user
   let oldTotalVisits = getDbUser();
   //add visit
   let newTotalVisits = addVisit(oldTotalVisits);
   //set value in db
   populateUserData(newTotalVisits);
}

addVisit = (oldTotal) => {
   let newTotal = oldTotal + 1;
   return newTotal;
}

getDbUser = () => {
   const db = localStorage.getItem('pokemon-user');
   //parse to js object
   let parseDB = JSON.parse(db);
   return parseDB.totalVisits;
}

//test if the data already exists
if (!localStorage.getItem('pokemon-user')) {
   console.log("lets set a user and visit value");
   populateUserData();
} else {
   console.log("user in DB, now add a visit");
   updateUser();
}