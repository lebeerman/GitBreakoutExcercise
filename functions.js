

// Hoisting - puts function anywhere - it will run when it's called
// Scope - Access to information. Need to know the function create scope.
// FUNCTIONS can CREATE SCOPE. In other languages there are different ways to create scope and layers of scope. but in Javascript, there its only the 1: FUNCTIONS. Functions have access to its parents information. Parents dont have access to children layer. Outside of a funciton is the Global Scope. Inside a function is Local Scope. Everything in the funciton can access globally scoped information. Everything outside a funciton cannot access locally scoped information. 

// Declaration - definition of a function and it hoists
function functionName() {
  return;
}

// Expression
var = function functionName() {
  return;
}

// Invocation - could do instead of Declaration or Expression
functionName();
