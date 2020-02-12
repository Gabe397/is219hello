const MathOperations = require('./MathOperations.js');

class Calculator{
    add(a,b){
        return this.result = MathOperations.sum(a,b)
    }

    divide(a,b){
        return this.result = MathOperations.quotient(a,b)
    }

    multiply(a,b){
        return this.result = MathOperations.product(a,b)
    }

    subtract(a,b){
        return this.result = MathOperations.difference(a,b)
    }

    square(a){
        return this.result = MathOperations.square(a)
    }

    squareRoot(a){
        return this.result = MathOperations.squareRoot(a)
    }






}

module.exports = Calculator;




test
test('', () => {
    let Calc = new Calculatro();
    expect(Calc.add(2,2).toBe(4));
    expect(Calc.result).toBe(4);
});