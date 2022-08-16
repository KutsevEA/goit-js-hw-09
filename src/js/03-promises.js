const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleSubmit);

let position = 1;

let delay = 0;
let step = 0;
let amount = 0;

function handleSubmit(event) {
  event.preventDefault();

  delay = Number(formEl.elements.delay.value);
  step = Number(formEl.elements.step.value);
  amount = Number(formEl.elements.amount.value);

  createPromises();

  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises() {
  for (let i = 0; i < amount; i += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) =>
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    position += 1;
    delay += step;
  }
}
