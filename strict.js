function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi!  I'm a strict mode function!  " + nested();
  }
  function notStrict() { return "I'm not strict."; }