const counterValue = {
  value: 0,
  increment(){
    this.value += 1;
  },
  decrement(){
    this.value -= 1;
  }
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function() {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function() {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});




// function handleCounterValue ({counterValue =0, step = 1} = {}){
//   this._value = counterValue;
//   this._step = step;
// }

// const counter = new CounterPlagin();
// console.log(counter);

// CounterPlagin.prototype.increment = function (){
//   this._value += this._step;
// }

// CounterPlagin.prototype.decrement = function (){
//   this._value -= this._step;
// }

