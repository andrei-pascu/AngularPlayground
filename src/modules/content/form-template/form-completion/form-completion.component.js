import {template} from './form-completion.template';

function formCompletion() {
    var app = angular.module('myApp');
    app.component('formCompletion', {
        template: template
    })
}

export {formCompletion};