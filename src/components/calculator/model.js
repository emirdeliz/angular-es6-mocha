class Model {

    constructor() {
        this.clear();
    }

    clear(){
        this.firstNumber = '';
        this.lastNumber  = '';
        this.operatorSel = '';
    }

    sum() {
        var result = (this.normalizeNum(this.firstNumber) + this.normalizeNum(this.lastNumber));
        return result;
    }

    subtract() {
        var result = (this.normalizeNum(this.firstNumber) - this.normalizeNum(this.lastNumber));
        return result;
    }

    split() {
        var isPerZero = (this.normalizeNum(this.lastNumber) == 0);
        if(isPerZero)
            return;

        var result = (this.normalizeNum(this.firstNumber) / this.normalizeNum(this.lastNumber));
        return result;
    }

    multiply() {
        var result = (this.normalizeNum(this.firstNumber) * this.normalizeNum(this.lastNumber));
        return result;
    }

    setNumber(num) {
        if(!this.operator) this.firstNumber += num;
        else this.lastNumber += num;
    }

    setOperator(operator) {
        this.operator = operator;
    }

    setComma() {
        var currentNum = !this.operator? this.firstNumber : this.lastNumber;
        currentNum = currentNum.replace(/\D/g, '') + ',';

        if(!this.operator) this.firstNumber = currentNum;
        else this.lastNumber = currentNum;
    }

    setResult() {
        var result = '0';
        switch(this.operator) {
            case '+':
                result = this.sum();
                break;
            case '-':
                result = this.subtract();
                break;
            case '*':
                result = this.multiply();
                break;
            case '/':
                result = this.split();
                break;
        }

        this.operator = '';
        this.lastNumber = '';
        this.firstNumber = String(result);
        return result;
    }

    normalizeNum(num){
        var lastChar = num.substr(num.length - 1);
        var isComma = (lastChar == '.');
        if(isComma)
            num += '0';

        num = num.replace(/,/gi, ".");
        return parseFloat(num);
    }
}

export default Model;
