const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const difference = require('./subtract');
const square = require('/.square');
const squareRoot = require('/.squareRoot');

class MathOperations {
    static sum(a,b) {
        return sum(a,b);
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static difference(a,b){
        return subtract(a,b)
    }
    static square(a){
        return square(a)
    }
    static squareRoot(a){
        return this.squareRoot(a)
    }

    static sumList(myarray = []){
        let result = 0;
        myarray.forEach(function (item){
            result = sum(Result,item);
        });

        return result;

    }
}

module.exports = MathOperations;