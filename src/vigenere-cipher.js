class VigenereCipheringMachine {
    notReverseFlag = true;

    constructor (value) {
        this.notReverseFlag = value;
    }
    
    encrypt(message, key) {
        let j = 0;
        key = key.toUpperCase();
        if (this.notReverseFlag == false) {
            message = message.split('').reverse().join('');
        }
        let newMessage = message.toUpperCase().split(" ").map(element => {
            let newStr = "";
            let numLetter, newNumLetter;
            for (let i=0; i < element.length ; i++){
                numLetter = element.codePointAt(i);
                if (numLetter<65||numLetter>90) {
                    newNumLetter = numLetter;
                } else {
                    if  (j>=key.length) {j = 0;}
                    newNumLetter = numLetter + key.codePointAt(j) - 65;
                    j++;
                    if (newNumLetter>90) {
                        newNumLetter -= 26;
                    }
                }
                newStr += String.fromCodePoint(newNumLetter);
            }
            return newStr;
        });
        
        return newMessage.join(" ");
        
    }

    decrypt(message, key) {
        let j = 0;
        key = key.toUpperCase();
        if (this.notReverseFlag == false) {
            message = message.split('').reverse().join('');}
        let newMessage = message.toUpperCase().split(" ").map(element => {
            let newStr = "";
            let numLetter, newNumLetter;
            for (let i=0; i < element.length ; i++){
                numLetter = element.codePointAt(i);
                if (numLetter<65||numLetter>90) {
                    newNumLetter = numLetter;
                } else {
                    if  (j>=key.length) {j = 0;}
                    newNumLetter = numLetter - key.codePointAt(j)+65;
                    j++;
                    if (newNumLetter<65) {
                        newNumLetter += 26;
                    }
                }
                newStr += String.fromCodePoint(newNumLetter);
            }
            return newStr;
        });
        return newMessage.join(" ");
    }
}

module.exports = VigenereCipheringMachine;
