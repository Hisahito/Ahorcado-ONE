
let keyboardBox = document.querySelector('.keyboard-box');
let resultBox = document.querySelector('.result-box');
let message = document.querySelector('.message');
let result_box_answer = document.querySelector('.result-answer');
let max_wrong = document.querySelector('.max-wrong');


const programing_lenguagues = [
    'JAVASCRIPT',
    'PYTHON',
    'JAVA',
    'PHP',
    'RUBY',
    'SWIFT',
    'GO',
    'KOTLIN',
    'SCALA',
    'RUST',
    'DART',
    'PERL',
    'COBOL',
    'FORTRAN',
    'LISP',
    'HASKELL',
    'MATLAB',
    'PASCAL',
    'ADA',
    'ASSEMBLER',
    'BASIC',
    'C',
    'SOLIDITY',
    'PROLOG',
    'APL',
    'FORTH',
    'REXX',
    'LUA',
    'ERLANG',
    'OCTAVE',
    'SQL',
    'HTML',
    'CSS',
]

let answer = '';
let maxWrong = 6;
let mistake = 0;
let guessed = [];
let wordStatus = null;

let RandomWord = () => {
    answer = programing_lenguagues[Math.floor(Math.random() * programing_lenguagues.length)];
}

function generateButtons() {
    let buttonsWord = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
        <button
            class="keyboard-btns"
            id='` + letter + `'
            onclick="Guess('` + letter + `')"
            >
            ` + letter + `
        </button>
        `).join('');
    keyboardBox.innerHTML = buttonsWord;
}

let Guess = (choosenLetter) => {
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    document.getElementById(choosenLetter).setAttribute('disabled', true);
    document.getElementById(choosenLetter).style.backgroundColor = '#F5F5F5';
    document.getElementById(choosenLetter).style.border = '1px solid grey';
    document.getElementById(choosenLetter).style.color = 'grey';

    if(answer.indexOf(choosenLetter) >= 0) {
        console.log(answer)
        wordGuess();
        GameWon();
    }else if (answer.indexOf(choosenLetter) === -1) {
        mistake++;
        mistakeUpdate();
        GameLost();
        hangmanUpdate();
    }
}

let GameWon = () => {
    if(wordStatus === answer) {
        console.log(answer)
        resultBox.style.display = 'block';
        message.innerHTML = 'Congratulations! You Won!';
        message.style.color = 'green';
        result_box_answer.innerHTML = answer;
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            confettiColors: [
              '#0A3871', '#fff', '#0A3871', '#fff', '#0A3871', '#fff',
            ],
          })
    }
}

let GameLost = () => {
    if(mistake === maxWrong) {
        resultBox.style.display = 'block';
        message.innerHTML = 'You Lost!';
        message.style.color = 'red';
        result_box_answer.innerHTML = answer;
    }
}

let wordGuess = () => {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.querySelector('.wordSpotlight').innerHTML = wordStatus;
}

let hangmanUpdate = () => {
    switch(mistake) {
        case 1:
            document.querySelector('.face').style.display = 'block';
        break;
        case 2:
            document.querySelector('.stomach').style.display = 'block';
        break;
        case 3:
            document.querySelector('.hand-one').style.display = 'block';
        break;
        case 4:
            document.querySelector('.hand-two').style.display = 'block';
        break;
        case 5:
            document.querySelector('#leg-one').style.display = 'block';
        break;
        case 6:
            document.querySelector('#leg-two').style.display = 'block';
        break;
    }
}

let reset = () => {
    mistake = 0;
    guessed = [];
    RandomWord();
    wordGuess();
    mistakeUpdate();
    hangmanUpdate();
    generateButtons();
    document.querySelector('.face').style.display = 'none';
    document.querySelector('.stomach').style.display = 'none';
    document.querySelector('.hand-one').style.display = 'none';
    document.querySelector('.hand-two').style.display = 'none';
    document.querySelector('#leg-one').style.display = 'none';
    document.querySelector('#leg-two').style.display = 'none';
}

let newGame = () => {
    resultBox.style.display = 'none';
    reset();
}

let mistakeUpdate = () => {
    document.querySelector('.mistake').innerHTML = mistake;
}

max_wrong.innerHTML = maxWrong;

RandomWord();
generateButtons();
wordGuess();