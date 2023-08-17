const {checkInventory} = require('./library.js');

const order = [['bags', 1], ['pants', 2]];

// Write your code below:

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkInventory(order)
  .then(handleSuccess, handleFailure);

