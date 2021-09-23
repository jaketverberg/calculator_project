const READOUT = document.querySelector('h3');
const INPUT = document.querySelector('h1');
const INPUT_BUTTONS = document.querySelectorAll('#circleButtons');
const ACTION_BUTTONS = document.querySelectorAll('#actionButtons')
const CLEAR_BUTTON = document.querySelector('.clear');
const DELETE_BUTTON = document.querySelector('.delete');
const ADDITION_BUTTON = document.querySelector('.add');
const SUBTRACTION_BUTTON = document.querySelector('.subtract');
const DIVIDE_BUTTON = document.querySelector('.divide');
const MULTIPLY_BUTTON = document.querySelector('.multiply');
const EQUALS_BUTTON = document.querySelector('.equals');

let arrInputs = [];



function addTextToReadOut (e) {
    READOUT.textContent += `${e}`;
    INPUT.textContent += `${e}`;
}

function actionButtonTextChange (e) {
    READOUT.textContent += ` ${e} `;
    INPUT.textContent = '';
}

function clearAll () {
    READOUT.textContent = '';
    INPUT.textContent = '';
    arrInputs = [];
}

function deleteLast() {
    let str = INPUT.textContent;
    let readOutStr = READOUT.textContent;
    INPUT.textContent = str.slice(0, -1);

    if (readOutStr.slice(-1) == " ") {
        return;
    } else {
        READOUT.textContent = readOutStr.slice(0, -1);
    }   
}

function pushNumber() {
    let number = parseInt(INPUT.textContent);
    arrInputs.push(number);
    console.log(arrInputs);
}

function equalsWhat () {
    
}


EQUALS_BUTTON.addEventListener('click', () => {
    equalsWhat();
});

CLEAR_BUTTON.addEventListener('click', () => {
    clearAll();
});

DELETE_BUTTON.addEventListener('click', () => {
    deleteLast();
});



ACTION_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        let textToUse = `${button.textContent}`;
        pushNumber();
        actionButtonTextChange(textToUse);
    })
})

INPUT_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        let textToUse = `${button.textContent}`;
        addTextToReadOut(textToUse);
    });
  });

  