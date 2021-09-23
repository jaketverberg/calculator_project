const READOUT = document.querySelector('h3');
const INPUT = document.querySelector('h1');
const INPUT_BUTTONS = document.querySelectorAll('#circleButtons');
const CLEAR_BUTTON = document.querySelector('.clear')
const DELETE_BUTTON = document.querySelector('.delete')


function addTextToReadOut (e) {
    READOUT.textContent += `${e}`;
    INPUT.textContent += `${e}`;
}

function clearAll () {
    READOUT.textContent = '';
    INPUT.textContent = '';
}

function deleteLast() {
    let str = INPUT.textContent;
    INPUT.textContent = str.slice(0, -1);
    READOUT.textContent = INPUT.textContent;
}

CLEAR_BUTTON.addEventListener('click', () => {
    clearAll();
});

DELETE_BUTTON.addEventListener('click', () => {
    deleteLast();
});

INPUT_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        let textToUse = `${button.textContent}`
      addTextToReadOut(textToUse);
    });
  });