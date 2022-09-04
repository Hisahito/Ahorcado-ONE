let keyboardBox = document.querySelector('.keyboard-box');
let resultBox = document.querySelector('.result-box');
let message = document.querySelector('.message');
let result_box_answer = document.querySelector('.result-answer');
let max_wrong = document.querySelector('.max-wrong');

const programing_lenguagues = [
    'JAVASCRIPT',
    'PYTHON',
    'JAVA',
    'C#',
    'C++',
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
    'SOLIDIY',
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
let mistakes = 0;
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