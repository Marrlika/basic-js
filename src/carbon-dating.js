const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const REACTION_RATE = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample( sampleActivity ) {
  if(typeof sampleActivity != "string"||!(parseFloat(sampleActivity))) return false;
  /*console.log(+sampleActivity);*/

  let dateSample = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/REACTION_RATE);
  return (!dateSample||dateSample===Infinity||dateSample<0)?false:dateSample;
};

