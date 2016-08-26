import ControllerCalculator from '../app/controller/controller.js';
import {assert} from 'chai';

'use strict';

describe('operation.test', () => {
    var controller;

    beforeEach(() => {
        controller = new ControllerCalculator();
    });

    it('should sum', () => {
        controller.setNumber(5);
        controller.setOperator('+');
        controller.setNumber(5);
        assert.equal(controller.setResult(), 10);
    });

    it('should substract', () => {
        controller.setNumber(7);
        controller.setOperator('-');
        controller.setNumber(2);
        assert.equal(controller.setResult(), 5);
    });

    it('should split', () => {
        controller.setNumber(4);
        controller.setOperator('/');
        controller.setNumber(2);
        assert.equal(controller.setResult(), 2);
    });

    it('should multiply', () => {
        controller.setNumber(3);
        controller.setOperator('*');
        controller.setNumber(3);
        assert.equal(controller.setResult(), 9);
    });
});
