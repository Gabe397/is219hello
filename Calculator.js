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




}

module.exports = Calculator;




test
test('', () => {
    let Calc = new Calculatro();
    expect(Calc.add(2,2).toBe(4));
    expect(Calc.result).toBe(4);
});