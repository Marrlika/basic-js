module.exports = function getSeason( date ) {
  if (!date) return "Unable to determine the time of year!";
  if (date.hasOwnProperty('getMonth')) throw Error;
  if(date.getMonth()>=2&&date.getMonth()<=4) {return "spring";}
  if(date.getMonth()>=5&&date.getMonth()<=7) {return "summer";}
  if(date.getMonth()>=8&&date.getMonth()<=10) {return "fall";}
  if(date.getMonth()>=11||date.getMonth()<=2) {return "winter";}

};
