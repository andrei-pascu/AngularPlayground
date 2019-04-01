import {template} from './form-completion.template';

class Ctrl {
    EXE() {
        console.log(this)
    }
}

function formCompletion() {
    var app = angular.module('myApp');
    app.component('formCompletion', {
        template: template,
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
                          //'parentComponentName'
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {formCompletion};