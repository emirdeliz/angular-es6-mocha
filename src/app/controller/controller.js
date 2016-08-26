import Calculator from '../../components/calculator/model';

class Controller {
    constructor($scope = {}){
        this.$scope             = $scope;
        this.calculator         = new Calculator();
        this.$scope.calculator  = this.calculator;
        this.$scope.setNumber   = this.setNumber;
        this.$scope.setComma    = this.setComma;
        this.$scope.setOperator = this.setOperator;
        this.$scope.setResult   = this.setResult;
        this.$scope.clear       = this.clear;
    }

    setNumber(num) {
        this.calculator.setNumber(num);
    }

    setComma() {
        this.calculator.setComma();
    }

    setOperator(operator) {
        this.calculator.setOperator(operator);
    }

    setResult() {
        return this.calculator.setResult();
    }

    clear() {
        this.calculator.clear();
    }
}

export default Controller;
