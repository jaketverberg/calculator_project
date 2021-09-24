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

let toBeOperated = [];

function pushToBeOperated(e) {
    toBeOperated.push(e);
}

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
    toBeOperated = [];
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


const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const multiply = function(arr) {
    return arguments[0] * arguments[1];
  };

  const divide = function(arr) {
    return arguments[0] / arguments[1];
  };


//Main function 
function operate() {
    let args = [...arguments];
    let answer = 0;

    while (args[0].length >= 3) {
        const firstNum = args[0][0];
        const secondNum = args[0][2];
        const operator = args[0][1];

        switch (operator) {
            case '+':
                answer = add(firstNum, secondNum);
                args[0].splice(0, 3);
                args[0].unshift(answer);
                break;
            case '-':
                answer = subtract(firstNum, secondNum);
                args[0].splice(0, 3);
                args[0].unshift(answer);
                break;
            case 'x':
                answer = multiply(firstNum, secondNum);
                args[0].splice(0, 3);
                args[0].unshift(answer);
                break;
            case '÷':
                answer = divide(firstNum, secondNum);
                args[0].splice(0, 3);
                args[0].unshift(answer);
                break;
        }//end of SWITCH
    }//end of While Loop

    INPUT.textContent = `${answer}`;
    READOUT.textContent = `${answer}`;
    toBeOperated = [];
}//end of Operate function

EQUALS_BUTTON.addEventListener('click', () => {
    pushToBeOperated(parseFloat(INPUT.textContent));
    operate(toBeOperated);
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
        pushToBeOperated(parseFloat(INPUT.textContent));
        pushToBeOperated(`${button.textContent}`);
        actionButtonTextChange(textToUse);
    })
})

INPUT_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        let textToUse = `${button.textContent}`;
        addTextToReadOut(textToUse);
    });
  });

  