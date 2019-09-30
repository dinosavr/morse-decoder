const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function whatIsTheLetter(tenSymbols) {

    let twoSymbol = "";    
    let morseSymbol = "";    
    let morseSymbols = "";    
    let letter = "";

    for (var i = 0; i < tenSymbols.length; i++) {
        twoSymbol = twoSymbol + tenSymbols.charAt(i);   
        if(twoSymbol.length == 2) {
/*             console.log("2 : " + twoSymbol);
 */            morseSymbol = whatIsTheMorseSymbol(twoSymbol); 
/*             console.log("Return morseSymbol: " + morseSymbol); */
            morseSymbols = morseSymbols + morseSymbol;
            twoSymbol ="";}
        if(i == 9) {
            if(morseSymbol == "*") letter = " ";
            else letter = MORSE_TABLE[morseSymbols];
        }
      }    
return letter;
}

function whatIsTheMorseSymbol(zeroOne) {

    const ZEROZERO = "00";
    const DOTCODE = "10";
    const DASHCODE = "11";    
    const SPACECODE = "**";    
    
    const ZERO = "";
    const DOT = ".";
    const DASH = "-"; 
    const SPACE = "*"; 

    let morseSymbol = "";
    
    if(zeroOne == ZEROZERO) morseSymbol = ZERO;
    if(zeroOne == DOTCODE) morseSymbol = DOT;
    if(zeroOne == DASHCODE) morseSymbol = DASH;
    if(zeroOne == SPACECODE) morseSymbol = SPACE;

    
    return morseSymbol;   
}
function decode(expr) {
    // write your solution here
    let request = expr;
    let tenSymbols = "";
    let letter = "";
    let answer = "";

/*     console.log("Request: " + request);
 */    
    for (var i = 0; i < request.length; i++) {
        tenSymbols = tenSymbols + request.charAt(i);   
        if((tenSymbols.length % 10) == 0) {
/*             console.log("10 : " + tenSymbols);
 */            letter = whatIsTheLetter(tenSymbols); 
            answer = answer + letter;
            // console.log("letter: " + letter);
            tenSymbols = "";
        }
        /* if(tenSymbols.length == 10) {console.log("10 numbers: " + tenSymbols); tenSymbols = "";}         */
      }

/*       console.log("answer: " + answer);
 */    
/*     answer = "hello world";
 */    return answer;
}

module.exports = {
    decode
}