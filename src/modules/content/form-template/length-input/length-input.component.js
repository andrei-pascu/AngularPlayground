import {template} from './length-input.template';

function lengthInput() {
    var app = angular.module('myApp');

    app.component('myCustomInput4', {
        template: template
    })
}

export {lengthInput};