var myModule = (function() {
  var privateVar = "I am private";

  function privateFunction() {
    console.log("This is a private function");
  }

  function publicFunction() {
    console.log("This is a public function");
  }

  // Expose public functions and variables by returning an object literal
  return {
    publicFunction: publicFunction
  };
})();

// Usage
myModule.publicFunction(); // This is a public function
//myModule.privateVar; // undefined
//myModule.privateFunction; // undefined
