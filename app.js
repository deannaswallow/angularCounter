angular
  .module('counter', [])
  .controller('CounterController', CounterController);

function CounterController() {
  this.number = 0;
  //increment function
  this.increment = () => {this.number++};
  //decrement function
  this.decrement = () => {this.number--};
}
