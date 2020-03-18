module.exports = function repeater( str, options ) {
    let { repeatTimes = 1, separator = '+', addition = "", additionRepeatTimes = 1, additionSeparator = "" } = options;
    if (addition === null) {
        addition = 'null';
    }
    let strNew = [];
    for (let i=0; i<repeatTimes; i++) {
        strNew.push(str+additionRepeat(addition, additionRepeatTimes, additionSeparator));
    }

    return strNew.join(separator);
};
  
function additionRepeat(str, repeatTimes, separator) {
    let strNew = [];
    for (let i=0; i<repeatTimes; i++) {
        strNew.push(str);
    }
    return strNew.join(separator);
}