import Angular from 'angular';
import Controller from './../controller/controller';
import './../assets/scss/style.scss';

class App {
    static init() {
        this.app = Angular.module('AppCalculator', []);
        this.app.controller('ControllerCalculator', Controller);
    }
}

App.init();
