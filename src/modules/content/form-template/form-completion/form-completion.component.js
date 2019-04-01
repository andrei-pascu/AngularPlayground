import {template} from './form-completion.template';

class Ctrl {
    myTest() {
        console.log(this)
    }
}

function formCompletion() {
    var app = angular.module('myApp');
    app.component('formCompletion', {
        template: template,
        bindings: {
            passing: '='
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
                          //'parentComponentName'
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {formCompletion};