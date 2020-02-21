[![Build Status](https://travis-ci.com/Gabe397/is219hello.svg?branch=master)](https://travis-ci.com/Gabe397/is219hello)

[![Coverage Status](https://coveralls.io/repos/github/Gabe397/is219hello/badge.svg?branch=master)](https://coveralls.io/github/Gabe397/is219hello?branch=master)

Encapsulation: When a object keeps its state private inside a class so that Other objects don't have access to this state. Objects can only access functions that are public called methods.

Example In Code
    We have encapsulated all of the calculator functions inside math operations class. We only allow Calculator.js to access
    these methods. This is similar to add,divide,subtract, multiply, square and square root. We have these methods that are encapsulated where
    MathOperation.js is the only one that can access these methods.
    
Abstraction: Simplifying code by exposing obbjects to high level mechanism only when they use it. We don't have to see the
complex code "under the hood" we only need to see what we need to see.

Example In Code
    We have all of the high level mechanisms of the calculator class in different files. Ideally the functionality of the calculator class
    is as simple as calling the methods that call the specified class that will do the method for us. We are taking the complex mechanisms
    and abstracting it in a more simple way in our Calculator class.

Inheritance: Whenever objects resemble other objects, we dont want to rewrite two objects. Since they are so similar and are only different
with a couple of methods. We solve this by using inheritance where a child class will inherent a parents characteristics such as methods.

Example In Code
    We use our calculator class to inherit all of the methods within the MathOperations.js.

Polymorphism: Allows you to use the same base class or parent class of an object without having to redo the code because each child class 
will inherent a different form of that method.

    
  