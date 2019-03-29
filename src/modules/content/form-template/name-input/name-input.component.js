import {template} from './name-input.template';

function nameInput() {
    var app = angular.module('myApp');
    app.component('myCustomInput1', {
        template: template
    })
}

export {nameInput};