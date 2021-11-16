const nlp = require('natural');
const keypress = require('keypress');

// process.stdin.on('keypress', function (ch, key) {
//     console.log('got "keypress"', key);
//     if (key && key.ctrl && key.name == 'c') {
//       process.stdin.pause();
//     }
//   });

  
const tokenizer = new nlp.WordTokenizer();

const word = "my name is chamberlain a web developer"

const wordLength = tokenizer.tokenize(word)

console.log(wordLength.length);