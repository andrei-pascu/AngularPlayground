import {template} from './length-input.template';


function lengthInput() {
    console.log('length-input.component.js loaded')
    var app = angular.module('myApp');

    app.component('myCustomInput4', {
        template: template
    })
}

export {lengthInput};