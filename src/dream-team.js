module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
let nameTeam = [];
members.forEach(item =>{ if(typeof(item)=="string") {nameTeam.push(item.trim()[0].toUpperCase());}});
   return nameTeam.sort().join("");
};