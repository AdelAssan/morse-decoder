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

function decode(expr) {
    const words = expr.split('**********');
   // console.log(words)
    const res = [];
    let word = '';
    let morse = '';
    let startStat = false;
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      //console.log(words[i])
      for (let j = 0; j < words[i].length; j++) {
        //console.log(words[i][j])
        count += 1;
        if (!startStat && words[i][j] === '1') {
          startStat= true;
        } else if (startStat){
          if (words[i][j] === '0'){
            morse += '.';
          }
          if (words[i][j] === '1'){
            morse += '-';
            //console.log(morse)
          } 
          startStat = false;
        }
        if (count === 10) {
          word += MORSE_TABLE[morse];
          morse = '';
          count = 0;
        }
      }
      res.push(word);
      word = '';
      //console.log(res)
    }
    return res.join(' ');
  }
   

module.exports = {
    decode
}