const READOUT = document.querySelector('h3');
const INPUT = document.querySelector('h1');
const INPUT_BUTTONS = document.querySelectorAll('#circleButtons');
const ACTION_BUTTONS = document.querySelectorAll('#actionButtons')
const CLEAR_BUTTON = document.querySelector('.clear');
const DELETE_BUTTON = document.querySelector('.delete');
const EQUALS_BUTTON = document.querySelector('.equals');

let toBeOperated = [];
INPUT.textContent = '0';


function pushToBeOperated(e) {
    toBeOperated.push(e);
}

function addTextToReadOut (e) {
    INPUT.textContent += `${e}`;
}

function actionButtonTextChange (e) {
    READOUT.textContent += INPUT.textContent + ` ${e} `;
    INPUT.textContent = '';
}

function initialInputClear() {
    INPUT.textContent.charAt(0) === '0' ? INPUT.textContent = INPUT.textContent.slice(1) : false;
}

function clearAll () {
    READOUT.textContent = '';
    INPUT.textContent = '0';
    toBeOperated = [];
}

function deleteLast() {
    let str = INPUT.textContent;
    let readOutStr = READOUT.textContent;
    INPUT.textContent = str.slice(0, -1);

    if (INPUT.textContent === '') {
        INPUT.textContent = '0';
    }

    if (readOutStr.slice(-1) == " ") {
        return;
    } else {
        READOUT.textContent = readOutStr.slice(0, -1);
    }   
}


//calculator functions
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

    //while the arguments are at a length we can compute
    while (args[0].length >= 3) {
        const firstNum = args[0][0];
        const secondNum = args[0][2];
        const operator = args[0][1];

        switch (operator) {
            case '+':
                answer = add(firstNum, secondNum);
                args[0].splice(0, 3, answer);
                break;
            case '-':
                answer = subtract(firstNum, secondNum);
                args[0].splice(0, 3, answer);
                break;
            case 'x':
                answer = multiply(firstNum, secondNum);
                args[0].splice(0, 3, answer);
                break;
            case '÷':
                answer = divide(firstNum, secondNum);
                args[0].splice(0, 3, answer);
                break;
        }//end of SWITCH
    }//end of While Loop

    //if the passed number is an float then round it to the hundreth.
    !Number.isInteger(answer) ? answer = Math.round(100*answer)/100 : false;

    //Larger number reads out the answer for user to see
    INPUT.textContent = `${answer}`;
    //Smaller number resets
    READOUT.textContent = '';
    //Reset operation array for new numbers
    toBeOperated = [];

}//end of Operate function


//Event Listeners
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
        initialInputClear();
        actionButtonTextChange(textToUse);
    })
})

INPUT_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        let textToUse = `${button.textContent}`;
        initialInputClear();
        addTextToReadOut(textToUse);
    });
  });

  