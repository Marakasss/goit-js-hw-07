function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const itemBox = document.querySelector('#boxes');
const input = document.querySelector('input');
const controls = document.querySelector('#controls');
document.body.classList.add("special-bg");
input.setAttribute('placeholder', '1 - 100')


//TAKE INPUT VALUE
function getInputValue() {
  return Number(input.value) || 0;
}

//IF INPUT NOT VALID
function showAlert(message) {
  input.value = '';
  input.setAttribute('placeholder', message);
  input.classList.add('alert-animation');
  setTimeout(() => {
    input.classList.remove('alert-animation');
  }, 1000); 
};

function removeAlert() {
  input.classList.remove('alert-animation');
  input.removeAttribute('placeholder');
};



//CREATE-ITEMS FUNCTION
function createBoxes() {
  destroyBoxes();
  let inputValue = getInputValue();
  
  if (inputValue > 0 && inputValue <= 100) {
    let width = 30;
    let height = 30;
    let box = '';
    const addedContent = [];
    
    for (let i = 0; i < inputValue; i++) {
      box = `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
      addedContent.push(box);
      width += 10;
      height += 10;
    }

    itemBox.insertAdjacentHTML("beforeend", addedContent.join(''));
    input.value = "";
    removeAlert();
  } else {
    console.log(inputValue);
    showAlert('Invalid Value! Enter from 1 to 100');
  }
}



//CREATE-DESTROY CONTENT BTNS EVENTS
createBtn.addEventListener('click', () => {
  createBoxes();
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createBoxes();
  }
});

//DESTROY CONTENT
function destroyBoxes() {
  itemBox.innerHTML = '';
  input.setAttribute('placeholder', '1 - 100');
}

destroyBtn.addEventListener('click', destroyBoxes);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete') {
    destroyBoxes();
  }
});


