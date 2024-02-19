// Basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Parsing functions
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // Export functions if using Node.js/CommonJS
  // module.exports = { add, subtract, multiply, divide, increment, decrement, makeInt, preserveDecimal };
  
  // Export functions if using ES6 modules
  // export { add, subtract, multiply, divide, increment, decrement, makeInt, preserveDecimal };
  