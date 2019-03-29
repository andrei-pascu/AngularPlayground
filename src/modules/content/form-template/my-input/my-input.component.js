import {template} from './my-input.template';

function myInput() {
    var app = angular.module('myApp');
    app.component('myCustomInput3', {
        template: template
    })
}

export {myInput};