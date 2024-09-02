let numberSelector = document.querySelector('#number');
let number = parseInt(numberSelector.textContent);
let refresh = document.querySelector('#refresh');
let incrementor = document.querySelector('#incrementor');

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
  let incrementorValue = parseInt(incrementor.value);

  if (number > 0 && number >= incrementorValue) {
    if (incrementorValue) {
      number -= incrementorValue;
      numberSelector.innerHTML = number;
      console.log('Minus Clicked', number);
    } else {
      number -= 1;
      numberSelector.innerHTML = number;
      console.log('Minus Clicked', number);
    }
  }
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let incrementorValue = parseInt(incrementor.value);
  if (incrementorValue) {
    number += incrementorValue;
    numberSelector.innerHTML = number;
    console.log('Add Clicked', number);
  } else {
    number += 1;
    numberSelector.innerHTML = number;
    console.log('Add Clicked', number);
  }
});

refresh.addEventListener('click', () => {
  number = 0;
  numberSelector.innerHTML = number;
});
