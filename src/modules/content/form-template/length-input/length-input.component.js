import {template} from './length-input.template';

console.log('length-input.component.js loaded')

function lengthInput() {
    var app = angular.module('myApp');

    app.component('myCustomInput4', {
        template: template
    })
}

export {lengthInput};