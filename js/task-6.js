function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const emoji = '<div class="smiley"><div class="eye left"></div><div class="eye right"></div><div class="mouth"></div></div>'
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const itemBox = document.querySelector('#boxes');
const input = document.querySelector('input');
const controls = document.querySelector('#controls')
document.body.classList.add("special-bg");

//TAKE INPUT VALUE
let inputValue = 0;
input.addEventListener('input', () => {
  inputValue = Number(input.value);
});

//CREATE-ITEMS FUNCTION
function createSmiley() {
   
   destroyBoxes();

  if (inputValue > 0 && inputValue <= 100) {
    let width = 30;
    let height = 30;
    
    for (let i = 0; i < inputValue; i++) {

      itemBox.insertAdjacentHTML("beforeend", emoji);
      
      const smile = itemBox.querySelector('.smiley:last-child');
     
      smile.style.width = `${width}px`;
      smile.style.height = `${height}px`;
      smile.style.backgroundColor = getRandomHexColor();
      
      width += 10;
      height += 10;
    }
    input.value = "";
    inputValue = 0;
    removeAlert();
  }
  else {
    showAlert('Value must be from 1 to 100');
  }
};

//ALERT IF INPUT NOT VALID
function showAlert(message) {
  removeAlert();
  const alert = document.createElement('p');
  alert.textContent = message;
  alert.classList.add('alert-text');
  alert.id = 'alertMessage';
  controls.append(alert);
};

function removeAlert() {
  const existingAlert = document.querySelector('#alertMessage');
  if (existingAlert) {
    existingAlert.remove();
  }
};

//CREATE SMILES))
createBtn.addEventListener('click', createSmiley);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createSmiley()
  }
});


//DESTROY SMILES))
function destroyBoxes() {
   
    itemBox.innerHTML = '';
    removeAlert();
  
}

destroyBtn.addEventListener('click', destroyBoxes);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete') {
    destroyBoxes()
  }
});
