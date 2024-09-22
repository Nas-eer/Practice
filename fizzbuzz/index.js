// Generate numbers from 1 - 100 - Iteration/Loop
// When generating the nos check for multiples of 3 and 5 - Modulus sign
// If multiple of 3, print Fizz, else if multiple of 5 print Buzz, if both print fizzbuzz, else print the number - Condition or switch

let container = document.querySelector('#container');

for (let index = 1; index < 101; index++) {
  const pTag = document.createElement('p');

  switch (true) {
    case index % 5 === 0 && index % 3 === 0:
      pTag.textContent = 'Fizz Buzz';
      pTag.className = 'fizzbuzz'
      break;
    case index % 3 === 0:
      pTag.textContent = 'Fizz';
      pTag.className = 'fizz'
      break;
    case index % 5 === 0:
      pTag.textContent = 'Buzz';
      break;
    default:
      pTag.textContent = index;
      break;
  }
  container.appendChild(pTag);
}
